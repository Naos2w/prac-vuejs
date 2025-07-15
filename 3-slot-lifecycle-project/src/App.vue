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
import Popup from './components/Popup.vue'
export default {
  components: { Popup },
  data() {
    return { show: false }
  }
}
</script>

<style scoped>
#app { padding: 2rem; text-align: center; }
button { font-size: 1rem; padding: 0.5rem 1rem; }
</style>
