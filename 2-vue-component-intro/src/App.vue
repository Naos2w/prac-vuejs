<template>
  <div id="app">
    <Header :title="appTitle" />
    <ItemList :todos="todos" @item-selected="onSelect" />
    <div v-if="selected">
      <h2>Selected:</h2>
      <p><strong>{{ selected.title }}</strong>: {{ selected.desc }}</p>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ItemList from './components/ItemList.vue'

export default {
  components: { Header, ItemList },
  data() {
    return {
      appTitle: 'My Todo App',
      todos: [
        { id: 1, title: 'Write report', desc: 'Summarize findings' },
        { id: 2, title: 'Study Vue', desc: 'Learn props and events' },
        { id: 3, title: 'Deploy app', desc: 'Send to Vercel' }
      ],
      selected: null
    }
  },
  methods: {
    onSelect(item) {
      this.selected = item
    }
  }
}
</script>

<style scoped>
#app { max-width: 600px; margin: 2rem auto; font-family: Arial, sans-serif; }
</style>
