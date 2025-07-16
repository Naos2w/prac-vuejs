<template>
  <div id="app">
    <Counter />
    <Cart />
    <v-btn @click="addSample">Add Sample Item</v-btn>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import Cart from './components/Cart.vue'
export default {
  components: { Counter, Cart },
  methods: {
    addSample() {
      const sampleProducts = [
        { id: 1, name: 'Sample Product A' },
        { id: 2, name: 'Sample Product B' },
        { id: 3, name: 'Sample Product C' },
        { id: 4, name: 'Special Item D' },
        { id: 5, name: 'Exclusive Gadget E' }
      ]

      // 隨機挑一個商品
      const randomItem =
        sampleProducts[Math.floor(Math.random() * sampleProducts.length)]

      this.$store.commit('addToCart', randomItem)
    }
  }
}
</script>
