const apiUrl = 'https://example.com/api'; // 替換成你的 API URL
let allEntries = []; // 存儲所有資料供篩選和搜尋使用

// 獲取所有資料並顯示於頁面 (GET)
async function getAllEntries() {
    try {
        const response = await fetch(`${apiUrl}/entries`);
        if (!response.ok) {
            throw new Error('無法獲取資料');
        }
        allEntries = await response.json(); // 儲存所有資料
        displayEntries(allEntries);
        generateCategoryFilters(allEntries); // 動態生成分類過濾按鈕
        addSearchFunctionality(); // 啟用搜尋功能
    } catch (error) {
        document.getElementById('output').textContent = `Error: ${error.message}`;
    }
}

// 顯示資料的函數
function displayEntries(entries) {
    const output = document.getElementById('output');
    output.innerHTML = ''; // 清空內容

    if (entries.length === 0) {
        output.textContent = '目前沒有資料。';
        return;
    }

    entries.forEach(entry => {
        const element = document.createElement('div');
        element.className = 'element';

        element.innerHTML = `
            <link rel="stylesheet" href="style.css">
            <div style="display: flex;">
            <div class="container">
                <div class="item">
                    <span class="label">分類</span>
                    <span class="value">${entry.category || '無'}</span>
                </div>
                <div class="item">
                    <span class="label">店家地址</span>
                    <span class="value">${entry.location || '無'}</span>
                </div>
                <div class="item">
                    <span class="label">自己評分星數</span>
                    <span class="value">${entry.rating ? entry.rating : '無'}</span>
                    <div id="stars" class="stars"></div> <!-- 星星顯示區域 -->
                </div>
                <div class="item">
                    <span class="label">備註</span>
                    <span class="value">${entry.comment || '無'}</span>
                </div>
            </div>
            <div class="map">
                <iframe 
                    src="${getMapUrl(entry.location)}"
                    width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen>
                </iframe>
            </div>
            </div>
        `;
        output.appendChild(element);
    });
}

// 生成地圖網址的函數
function getMapUrl(location) {
    const query = encodeURIComponent(location || '台灣');
    return `https://www.google.com/maps?q=${query}&output=embed`;
}

// 生成分類過濾按鈕
function generateCategoryFilters(entries) {
    const filterContainer = document.getElementById('filter-container');
    if (!filterContainer) return; // 避免找不到容器

    const categories = [...new Set(entries.map(entry => entry.category || '無'))];

    filterContainer.innerHTML = `<button class="filter-btn" data-category="all">全部</button>`;
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.textContent = category;
        button.dataset.category = category;
        filterContainer.appendChild(button);
    });

    filterContainer.addEventListener('click', event => {
        if (event.target.classList.contains('filter-btn')) {
            const selectedCategory = event.target.dataset.category;
            filterEntries(selectedCategory);
        }
    });
}

// 篩選資料
function filterEntries(category) {
    const filteredEntries = category === 'all'
        ? allEntries
        : allEntries.filter(entry => entry.category === category);
    displayEntries(filteredEntries);
}

// 搜尋功能
function addSearchFunctionality() {
    const searchBar = document.getElementById('search-bar');
    const searchBtn = document.getElementById('search-btn');

    // 即時搜尋
    searchBar.addEventListener('input', () => {
        const keyword = searchBar.value.trim().toLowerCase();
        searchEntries(keyword);
    });

    // 按下搜尋按鈕
    searchBtn.addEventListener('click', () => {
        const keyword = searchBar.value.trim().toLowerCase();
        searchEntries(keyword);
    });
}

// 搜尋備註
function searchEntries(keyword) {
    const filteredEntries = keyword
        ? allEntries.filter(entry => (entry.comment || '').toLowerCase().includes(keyword))
        : allEntries;
    displayEntries(filteredEntries);
}

// 初始化
document.addEventListener('DOMContentLoaded', getAllEntries);
