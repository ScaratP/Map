window.onload = function() {
    var rating = parseFloat(document.getElementById('rating').textContent); // Ensure rating is a number
    var starsContainer = document.getElementById('stars'); // 星星容器

    // 計算應顯示的星星數量
    var totalStars = Math.floor(rating / 2); // 顯示的整顆星星數
    var hasHalfStar = (rating % 2 !== 0); // 是否需要顯示半顆星

    // 清除容器內容
    starsContainer.innerHTML = '';

    // 顯示整顆星星
    for (var i = 1; i <= totalStars; i++) {
        var star = document.createElement('i');
        star.classList.add('fas', 'fa-star'); // 填滿星星
        starsContainer.appendChild(star);
    }

    // 如果需要半顆星，則顯示
    if (hasHalfStar) {
        var halfStar = document.createElement('i');
        halfStar.classList.add('fas', 'fa-star-half-alt'); // 半顆星星
        starsContainer.appendChild(halfStar);
    }

    // 顯示空心星星
    for (var i = totalStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
        var emptyStar = document.createElement('i');
        emptyStar.classList.add('far', 'fa-star'); // 空心星星
        starsContainer.appendChild(emptyStar);
    }
};
