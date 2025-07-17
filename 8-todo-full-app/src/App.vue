<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Todo App</v-toolbar-title>
      <v-spacer />
      <v-btn text to="/" exact tag="router-link">All</v-btn>
      <v-btn text to="/active" tag="router-link">Active</v-btn>
      <v-btn text to="/completed" tag="router-link">Completed</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('fetchTodos')
  }
}
</script>
