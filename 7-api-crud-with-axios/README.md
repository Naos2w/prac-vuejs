### 📌 專案說明

透過串接 [JSONPlaceholder]() 的偽 API，你將實作文章列表的讀取與刪除操作，熟悉非同步資料流程、HTTP 請求、錯誤處理與狀態更新。

---

### 🎯 學習目標

- 使用 Axios 發送 GET 和 DELETE 請求。
- 在 Vue 元件的生命周期中處理非同步請求（如 `created()`）。
- 使用 `v-for` 渲染動態文章列表。
- 點擊按鈕刪除文章，更新畫面資料。
- 處理 loading 狀態與錯誤提示。
- （可選）展示新增或更新文章功能。

---

### 📁 檔案架構建議

```
7-api-crud-with-axios/
├── public/index.html
└── src/
    ├── components/
    │   └── PostList.vue
    ├── App.vue
    └── main.js

```

### ✅ 實作步驟建議

1. 建立專案，安裝 Axios：`npm install axios`
2. 新增 `PostList.vue`、`App.vue`、`main.js` 程式碼。
3. 執行開發伺服器，確認文章清單可以正確載入並顯示。
4. 點擊刪除可即時刷新畫面並移除文章項目。
5. 加入 loading 與錯誤訊息行為。
6. 推至 GitHub，部署至 Vercel。貼上網址後，我會幫你檢查功能是否正常。
