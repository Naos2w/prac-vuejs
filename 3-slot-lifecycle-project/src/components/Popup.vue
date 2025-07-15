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
