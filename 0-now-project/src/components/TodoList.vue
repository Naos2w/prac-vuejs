<template>
  <v-list two-line>
    <todo-item v-for="t in todos" :key="t.id" :todo="t" />
  </v-list>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  props: ['todos'],
  components: { TodoItem }
}
</script>
