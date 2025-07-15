<script>
import { ref, onMounted } from 'vue'
export default {
  setup() {
    const name = ref('')
    const count = ref(0)
    const timer = ref(10)

    onMounted(() => {
      const id = setInterval(() => {
        if (timer.value > 0) {
          timer.value--
        } else {
          clearInterval(id)
        }
      }, 1000)
    })

    return { name, count, timer }
  }
}
</script>

<template>
  <div>
    <h1>Hello {{ name || 'stranger' }}!</h1>
    <label>
      Enter your name:
      <input type="text" v-model="name" placeholder="Your name" />
    </label>

    <p>Click Count: {{ count }}</p>
    <button @click="count++">Click Me</button>

    <p v-if="timer > 0">Timer: {{ timer }}s</p>
    <p v-else>Time's up!</p>
  </div>
</template>

<style scoped>
/* 可加入你之前的樣式（按鈕、輸入框等等） */
</style>
