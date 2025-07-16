<template>
  <nav>
    <router-link to="/" exact>Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">Products</router-link>
  </nav>
</template>


<script>

export default {
  props: {
    linkList: { type: Array, required: true, default: () => [] },
  },
}
</script>

<style>
nav {
  padding: 1rem;
  text-align: center;
  background: #42b983;
}

a {
  color: white;
  margin: 0 0.5rem;
  text-decoration: none;
}

.router-link-exact-active {
  font-weight: bold;
}
</style>
