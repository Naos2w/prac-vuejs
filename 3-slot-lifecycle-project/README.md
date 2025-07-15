# 3-slot-lifecycle-project

## 📌 專案說明

這是個彈窗元件專案：它支持 slot 插槽（標題與內容）、使用 mixin 處理倒數或初始化過程，並展示 Vue 2 的生命週期流程。

## 🎯 學習目標

- 使用 slot（預設、具名與作用域 slot）。
- 使用 mixin 共用元件邏輯。
- 理解並應用 Vue 2 的生命週期鉤子（如 `created`, `mounted`, `destroyed`）。
- 學會在父元件控制子元件顯示／關閉。

## 📁 檔案架構

```markdown
3-slot-lifecycle-project/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Popup.vue
│ │ └── TimerMixin.js
│ ├── App.vue
│ └── main.js
├── package.json
└── README.md
```

## 📝 功能需求

1. **TimerMixin.js**

   - 提供倒數計時功能（例如：倒數 5 秒後自動觸發關閉）。
   - 含 `created` 與 `destroyed` 的 console log。

2. **Popup.vue**

   - props：`visible`（Boolean）、`autoClose`（秒數，例如 5）。
   - 使用 mixin（TimerMixin）處理倒數。
   - 模板：
     - 具名 slot `header`：放標題。
     - 預設 slot：放內容。
     - Footer 區域含一個關閉按鈕，點擊觸發 `$emit('close')`。

3. **App.vue**

   - 有按鈕 `Show Popup` 控制 `visible`。
   - 傳入 `autoClose=5` 秒。
   - 在 `Popup` slot 裡插入標題和內容。
   - 當 Popup emit `close` 時，父元件設定 `visible=false`。

---

🔧 程式碼範例
src/components/TimerMixin.js

```js
export default {
  data() {
    return { timeLeft: 0, timerId: null };
  },
  created() {
    console.log("Mixin created, time left initial:", this.timeLeft);
  },
  methods: {
    startTimer(seconds) {
      this.timeLeft = seconds;
      this.timerId = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          clearInterval(this.timerId);
          this.$emit("close");
        }
      }, 1000);
    },
  },
  beforeDestroy() {
    clearInterval(this.timerId);
    console.log("Mixin beforeDestroy, timer cleared");
  },
};
```

```js
// src/components/Popup.vue
<template>
  <div v-if="visible" class="overlay">
    <div class="popup">
      <header class="popup-header">
        <slot name="header">Default Title</slot>
      </header>
      <section class="popup-body">
        <slot>Default Content</slot>
      </section>
      <footer class="popup-footer">
        <slot name="footer">
          <button @click="closePopup">Close</button>
        </slot>
        <p v-if="timeLeft > 0">Closing in {{ timeLeft }}s…</p>
      </footer>
    </div>
  </div>
</template>

<script>
import TimerMixin from './TimerMixin.js'
export default {
  mixins: [TimerMixin],
  props: {
    visible: { type: Boolean, required: true },
    autoClose: { type: Number, default: 0 }
  },
  watch: {
    visible(val) {
      if (val && this.autoClose > 0) {
        this.startTimer(this.autoClose)
      }
    }
  },
  methods: {
    closePopup() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5); display: flex; align-items: center;
  justify-content: center;
}
.popup {
  background: white; padding: 1rem; border-radius: 4px; width: 90%; max-width: 400px;
}
.popup-header { font-size: 1.2rem; margin-bottom: 0.5rem; }
.popup-body { margin-bottom: 1rem; }
.popup-footer { text-align: right; }
</style>
```

src/App.vue

```vue
<template>
  <div id="app">
    <button @click="show = true">Show Popup</button>
    <Popup :visible="show" :autoClose="5" @close="show = false">
      <template #header>
        <h2>Alert!</h2>
      </template>
      這是一段彈窗內容，你可以放任何 HTML。
      <template #footer>
        <button @click="show = false">OK</button>
      </template>
    </Popup>
  </div>
</template>

<script>
import Popup from "./components/Popup.vue";
export default {
  components: { Popup },
  data() {
    return { show: false };
  },
};
</script>

<style scoped>
#app {
  padding: 2rem;
  text-align: center;
}
button {
  font-size: 1rem;
  padding: 0.5rem 1rem;
}
</style>
```
