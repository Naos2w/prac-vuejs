<template>
  <v-form @submit.prevent="onSubmit">
    <v-text-field v-model="title" label="New Todo" outlined required />
    <v-btn type="submit" color="primary">Add</v-btn>
  </v-form>
</template>
<script>

export default {
  data() { return { title: '' } },
  methods: {
    onSubmit() {
      console.log('onSubmit triggered, title =', this.title) // ✔
      if (!this.title.trim()) return
      this.$store.dispatch('createTodo', this.title)
      this.title = ''
    }
  }
}
</script>
