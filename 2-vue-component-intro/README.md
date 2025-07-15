# 2-vue-component-intro

## 專案說明

在這個專案中，您將深入了解 Vue 2 的元件化架構，學習如何建立可重複使用的元件，並掌握父子元件間的資料傳遞與事件處理。透過實作一個簡單的待辦清單應用，您將體驗到元件化開發的優勢，並為後續進階專案奠定基礎。

## 📌 學習目標

- 了解 Vue 2 的元件結構與組織方式。
- 學會使用 `props` 傳遞資料至子元件。
- 掌握事件處理與資料回傳至父元件。
- 練習使用 `v-for` 動態渲染列表。
- 實作簡單的樣式與佈局。

## 📁 檔案架構

```
2-vue-component-intro/
├── public/
│ └── index.html
├── src/
│ ├── assets/
│ │ └── logo.png
│ ├── components/
│ │ ├── Header.vue
│ │ └── ItemList.vue
│ ├── App.vue
│ └── main.js
├── package.json
└── README.md
```

markdown
複製
編輯

## 📝 需求內容

1. **Header.vue**

   - 顯示應用程式名稱。
   - 使用 `props` 接收父元件傳遞的標題資料。

2. **ItemList.vue**

   - 接收一個物件陣列 `items`，並使用 `v-for` 動態渲染每個項目。
   - 每個項目應顯示名稱與描述。

3. **App.vue**

   - 引入 `Header` 與 `ItemList` 元件。
   - 在 `data` 中定義應用程式標題與項目資料。
   - 使用 `v-bind` 傳遞資料至子元件。
   - 使用 `v-on` 綁定事件處理器。

4. **功能需求**

   - 點擊項目時，應觸發事件並顯示該項目的詳細資訊。
   - 使用 `v-if` 或 `v-show` 控制詳細資訊的顯示與隱藏。

5. **樣式與佈局**

   - 使用簡單的 CSS 或 SCSS 進行樣式設計。
   - 使介面具有基本的響應式佈局，適應不同螢幕尺寸。

---

如果您有任何問題或需要進一步的協助，請隨時告訴我！
::contentReference[oaicite:0]{index=0}
