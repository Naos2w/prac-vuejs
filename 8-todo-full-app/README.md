## 🧩 第 8 專案：`8-todo-full-app`

這是個功能完整的待辦清單應用，它將整合你之前學到的所有技能：Vue 2、Vue Router、Vuex、Axios、元件設計、狀態管理、API 通信，以及部署能力。

---

### 📌 專案說明

建立一個 SPA 待辦清單應用，使用 Vue Router 分頁、Vuex 管理待辦項目、Axios 串接網路後端（使用 JSONPlaceholder 模擬），完成新增、編輯、刪除功能，並以 Vercel 部署。

---

### 🎯 學習目標

- **Vue Router** ：使用路由切換頁籤（全部、未完成、已完成）
- **Vuex** ：集中管理待辦資料 、定義 mutations/actions 如 add/edit/delete/toggleComplete
- **Axios** ：模擬後端串接，將待辦資料 GET/POST/PATCH/DELETE
- **元件化** ：拆分多個元件（TodoForm.vue, TodoList.vue, TodoItem.vue）
- **條件渲染** ：分頁顯示不同類型的事項；顯示操作按鈕
- **Vercel 部署** ：完整專案上線

---

### 📁 檔案架構建議

```less
8-todo-full-app/
├── public/index.html
└── src/
    ├── components/
    │   ├── TodoForm.vue
    │   ├── TodoList.vue
    │   └── TodoItem.vue
    ├── views/
    │   ├── All.vue
    │   ├── Active.vue
    │   └── Completed.vue
    ├── router/index.js
    ├── store/index.js
    ├── App.vue
    └── main.js

```

### 📝 功能需求與內容

#### ✅ Vuex store (`store/index.js`)

```javascript
state:
  todos: []

mutations:
  setTodos(state, arr)
  addTodo(state, todo)
  updateTodo(state, todo)
  deleteTodo(state, id)

actions:
  fetchTodos, createTodo, patchTodo, removeTodo (使用 axios)

getters:
  allTodos, activeTodos, completedTodos
```

#### ✅ Vue Router (`router/index.js`)

- `/` → All.vue
- `/active` → Active.vue
- `/completed` → Completed.vue

`App.vue` 中使用 `nav router-link` 實作三個頁籤。

#### ✅ `TodoForm.vue`

- 表單包含文字欄位。
- 用於新增或編輯（可選編輯功能）。

#### ✅ `TodoList.vue`

- 傳入一組 todos，用 `v-for` 渲染 `TodoItem`。

#### ✅ `TodoItem.vue`

- 顯示 todo 內容與完成狀態。
- 勾選完成與刪除鈕，呼叫 Vuex action 處理更新。

---

### ✅ 開始步驟建議

1. 新專案 `npm install vue-router@3 vuex@3 axios`
2. 實作 Vuex store、Router 配置。
3. 撰寫元件：Form、List、Item。
4. Views 路由頁籤。
5. 測試功能：切換頁籤、完成 CRUD 操作。
6. 推上 GitHub，部署到 Vercel。
7. 分享部署網址，我幫你檢查所有功能是否完整。
