<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>


<style scoped>
header { padding: 1rem; background: #42b983; color: white; text-align: center; }
</style>
