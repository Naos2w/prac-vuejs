<template>
  <v-list-item>
    <v-list-item-action>
      <v-checkbox v-model="localCopy.completed" @change="toggle" />
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title :class="{ 'text--line-through': todo.completed }">
        {{ todo.title }}
      </v-list-item-title>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn icon @click="remove">
        <v-icon>delete</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  props: ['todo'],
  data() {
    return {
      localCopy: { ...this.todo }
    }
  },
  watch: {
    todo(newVal) {
      this.localCopy = { ...newVal }
    }
  },
  methods: {
    toggle() { this.$store.dispatch('toggleTodo', this.todo) },
    remove() { this.$store.dispatch('removeTodo', this.todo.id) }
  }
}
</script>
