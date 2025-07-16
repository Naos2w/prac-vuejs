<template>
  <div>
    <h1>Product Detail</h1>
    <p>Product ID: {{ id }}</p>
    <button @click="$router.go(-1)">Go Back</button>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>
