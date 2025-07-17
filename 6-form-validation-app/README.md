### 🎯 學習目標

- 使用 `v-model` 雙向綁定表單欄位。
- 進行基本的欄位驗證（如 Email、密碼強度、必填判斷）。
- 顯示使用者友善的錯誤提示。

  -（可選）整合 Vuetify 內建 form 元件與校驗功能，例如 `v-form`, `v-text-field`, `rules` 屬性。

---

### 📁 建議檔案架構

```less
6-form-validation-app/
├── public/index.html
└── src/
    ├── components/
    │   └── RegisterForm.vue
    ├── App.vue
    └── main.js

```

---

### 📝 功能需求與內容

1. **RegisterForm.vue**
   - 表單欄位：姓名、Email、密碼。
   - 使用 `v-model` 綁定資料。
   - 驗證規則：
     - 姓名不為空。
     - Email 格式正確（使用正規表達式）。
     - 密碼至少 6 個字元。
   - 顯示驗證錯誤（例如紅色提示文字）。
   - 提交時若所有欄位合法，顯示成功訊息或清空欄位。
2. **App.vue**
   - 嵌入 `RegisterForm` 元件。
   - 可選擇在提交後顯示表單資料摘要。
3. **main.js**
   - 初始化 Vue + Vuetify。
