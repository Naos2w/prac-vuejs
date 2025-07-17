<template>
  <v-container>
    <TodoForm />
    <v-divider class="my-4" />
    <TodoList :todos="allTodos" />
  </v-container>
</template>

<script>
import TodoForm from '../components/TodoForm.vue'
import TodoList from '../components/TodoList.vue'
import { mapGetters } from 'vuex'

export default {
  components: { TodoForm, TodoList },
  computed: mapGetters(['allTodos']),
  // created() { this.$store.dispatch('fetchTodos') }
}
</script>
