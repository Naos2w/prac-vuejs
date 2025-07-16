<template>
  <div>

    <h2>Count: {{ count }}</h2>
    <v-btn elevation="2" @click="increment">+1</v-btn>
    <v-btn elevation="2" @click="decrement">–1</v-btn>
    <v-btn elevation="2" @click="incrementAsync">+1 after 0.5s</v-btn>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
    ...mapActions(['incrementAsync'])
  }
}
</script>
