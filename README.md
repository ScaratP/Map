# 美食地圖應用程式

這是一個互動式的美食地圖應用程式，讓使用者可以標記、搜尋和管理自己喜愛的美食地點。使用 Google Maps API 進行地理定位和標記，並支援地點分類、評分和搜尋功能。

## 功能特色

- **互動式地圖**：使用 Google Maps 顯示所有標記的美食地點，支援聚合顯示
- **美食地點管理**：新增、搜尋和篩選美食地點
- **分類系統**：支援多種餐飲分類（早午餐、正餐、小吃、咖啡等）
- **評分系統**：為每個地點提供 1-10 分的評分，並顯示星級
- **地點搜尋**：透過關鍵字和分類搜尋特定地點
- **詳細資訊**：包含地點分類、地址、評分和個人備註
- **快捷鍵**：支援快速導航和操作的鍵盤快捷鍵

## 頁面結構

- **主頁面（index.html）**：整合地圖視圖和列表視圖
- **標記聚合（MarkerCluster.html）**：地圖標記和聚合功能
- **地點列表（maplist.html）**：所有美食地點的清單視圖
- **新增地點（AddressSelection.html）**：提供表單新增美食地點

## 技術實現

### 前端
- HTML5、CSS3 和 JavaScript
- Google Maps JavaScript API
- Google Maps Geocoding API
- MarkerClusterer 用於標記聚合
- Font Awesome 圖示

### 後端
- 需要連接 API Gateway 進行資料存取
- 支援 RESTful API 操作（GET、POST）

### 資料結構
```json
{
  "category": "類別（如：正餐、小吃等）",
  "location": "地址",
  "latitude": "經度",
  "longitude": "緯度",
  "comment": "備註",
  "rating": "評分（1-10）"
}
```

## 快速開始

1. 複製專案到本地伺服器
2. 在 `MarkerCluster.html` 和 `getallitems.js` 中設定您的 API Gateway 端點
3. 確保 Google Maps API 金鑰已正確設定
4. 打開 `index.html` 開始使用應用程式

## 使用指南

### 查看地圖
- 主頁面頂部顯示所有美食地點的地圖視圖
- 點擊地圖上的標記可查看該地點的詳細資訊
- 當標記過多時，會自動聚合成群組

### 搜尋和篩選
- 使用分類下拉選單選擇特定類別
- 在搜尋框中輸入關鍵字搜尋備註
- 點擊分類按鈕快速篩選特定類別的地點

### 新增地點
1. 點擊右下角的 "+" 按鈕或按 "N" 鍵打開新增表單
2. 選擇地點分類
3. 在地圖上選擇或搜尋地點
4. 填寫備註資訊
5. 給予評分（1-10分）
6. 點擊「新增」按鈕提交

### 快捷鍵
- **N**：打開新增地點表單
- **ESC**：關閉表單或地圖資訊視窗
- **↑**（右下角按鈕）：返回頁面頂部

## 自訂與擴展

### 修改樣式
- 所有樣式設定在 `style.css` 和 `index.css` 中
- 可自由調整顏色、大小和布局

### API 整合
- 在 `AddressSelection.html` 和 `MarkerCluster.html` 中設定您的 API Gateway
- 確保後端 API 支援必要的資料欄位和操作

## 注意事項

- 應用需要連接有效的 API Gateway 才能實現資料持久化
- 使用前請確保您有有效的 Google Maps API 金鑰
- 建議使用現代瀏覽器以獲得最佳體驗

## 相關資源

- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript)
- [MarkerClusterer](https://developers.google.com/maps/documentation/javascript/marker-clustering)
- [Font Awesome](https://fontawesome.com/)
