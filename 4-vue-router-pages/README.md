## 📄 專案 4：`4-vue-router-pages`

### 📌 專案說明

**這是一個使用 Vue Router（v3，適用於 Vue 2.x）來建立多頁面 SPA 的專案。你將學會如何設定路由、創建多個頁面元件、實作動態與巢狀路由，並透過導航連結切換頁面，模擬真實的 SPA 開發流程。**

---

### 🎯 學習目標

- **使用 Vue Router v3 搭配 Vue 2，在 Vite 專案中整合路由功能。**
- **設定多個路由頁面，並在 App.vue 中導入 **`router-view` 和 `router-link` 元件功能。
- **實作靜態頁面（如 Home、About）與動態頁面（如產品詳情頁 **`/product/:id`）。
- **（可選）使用巢狀路由（Nested Routes）渲染子元件。**
- **理解 **`$route` 和 `$router` 的使用方式與導航行為。

---

### 📁 檔案架構（建議結構）

```less
4-vue-router-pages/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── NavBar.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Products.vue
│   │   └── ProductDetail.vue
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
├── package.json
└── README.md
```

---

### 📝 功能需求與內容

1. **NavBar.vue** **（導覽列）**

- **顯示導覽連結：Home、About、Products**
- **使用 **`<router-link>` 建立無刷新的導航。

1. **Home.vue / About.vue**

   - 簡單靜態內容頁面，有標題與段落介紹。

2. **Products.vue**

   - 顯示一列假設性的產品清單，像：
     ```js
     [{ id: 'a', name: 'Product A' }, …]
     ```
   - **每個產品名稱使用 **`<router-link :to="'/product/' + item.id">`

3. **ProductDetail.vue**

   - **以動態路由參數接收 **`this.$route.params.id`
   - **顯示該產品名稱或用模板抓 id 展示訊息。**
   - **可選擇加入 **`$router.go(-1)` 或返回按鈕。

4. **router/index.js**

   ```js
   import Vue from "vue";
   import Router from "vue-router";
   import Home from "../views/Home.vue";
   import About from "../views/About.vue";
   import Products from "../views/Products.vue";
   import ProductDetail from "../views/ProductDetail.vue";

   Vue.use(Router);

   export default new Router({
     mode: "history",
     routes: [
       { path: "/", component: Home },
       { path: "/about", component: About },
       { path: "/products", component: Products },
       { path: "/product/:id", component: ProductDetail },
     ],
   });
   ```

5. **App.vue**

   - **引入 NavBar 組件。**
   - **放置 **`<router-view />` 作為頁面渲染區域。

6. **main.js**

   ```js
   import Vue from "vue";
   import App from "./App.vue";
   import router from "./router";

   new Vue({
     router,
     render: (h) => h(App),
   }).$mount("#app");
   ```

---

### 💡 背後技術與參考資料

- **Vue Router 是 Vue 官方提供的路由庫，可在 Vue 2.x 中使用 v3 版；如透過 Vue Router 統一管理頁面與 URL 變化** [GitHub**+11**router.vuejs.org**+11**Stack Overflow**+11**](https://router.vuejs.org/guide/?utm_source=chatgpt.com)[GitHub**+1**Medium**+1**](https://github.com/ElanYoung/vite-vue2-js-starter-template?utm_source=chatgpt.com)。
- **在 App.vue 中使用 **`<router-link>` 和 `<router-view>`，可以實現無刷新的 SPA 頁面切換 。
- **Vue Router 在 Vue 2 中需先用 **`Vue.use(Router)` 註冊插件，並於 Vue 實例中傳入 `router` 選項 。
