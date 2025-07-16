## 📄 專案 5：`5-vuex-counte	r-cart`

### 📌 專案說明

**這是一個教學式的專案，會讓你學習如何在 Vue 2 中使用 Vuex 來集中管理應用狀態，比如計數器或一個購物車功能，包含 state、mutations、actions、getters 的概念與應用。**

---

## 🎯 學習目標

- **使用 Vuex 管理全域狀態（state）。**
- **使用 **`mutations` 變更 state，例如 `increment`, `addItem`, `removeItem` 等。
- **使用 **`actions` 處理異步或複雜邏輯，並 commit mutations。
- **使用 **`getters` 計算衍生狀態，例如總數、總價。
- **在元件中使用 **`mapState`, `mapActions`, `mapGetters`。

**這符合 Vuex 官方教學介紹 Vuex 的核心：state、mutations、actions、getters 等概念** [youtube.com**+15**vuex.vuejs.org**+15**digitalocean.com**+15**](https://vuex.vuejs.org/guide/?utm_source=chatgpt.com)[dev.to](https://dev.to/delia_code/a-beginners-guide-to-using-vuex-4egh?utm_source=chatgpt.com)。

---

## 📁 檔案架構

```less
5-vuex-counter-cart/
├── public/
│   └── index.html
├── src/
│   ├── store/
│   │   └── index.js
│   ├── components/
│   │   ├── Counter.vue
│   │   └── Cart.vue
│   ├── App.vue
│   └── main.js
├── package.json
└── README.md

```

---

## 📝 功能需求

### ✅ Counter 功能（簡易版）

- 元件 `Counter.vue` 顯示目前計數器值。
- 有兩個按鈕：`+1`, `–1`。
- 點擊後透過 Vuex commit mutation 改變值。

### ✅ 購物車功能（進階版，可選）

- `Cart.vue` 顯示購物車商品清單，支援加入商品、刪除商品。
- 使用 Vuex state 儲存商品列表與數量（quantity）。
- 使用 getters 計算總商品件數或總金額。
- 點擊按鈕 dispatch action（若有異步 API 模擬）或 commit mutation 處理邏輯。
