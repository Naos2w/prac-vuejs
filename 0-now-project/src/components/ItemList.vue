
<template>
  <ul>
    <li v-for="item in todos" :key="item.id">
      <span @click="select(item)">{{ item.title }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
    select(item) {
      this.$emit('item-selected', item)
    }
  }
}
</script>

<style scoped>
ul { list-style: none; padding: 0;  }
li { margin: 0.5rem 0; cursor: pointer; }
li:hover { text-decoration: underline; }
</style>
