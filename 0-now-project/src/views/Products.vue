<template>
  <div>
    <h1>Products</h1>
    <ul class="list">
      <li v-for="item in items" :key="item.id">
        <router-link :to="`/product/${item.id}`">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 'a', name: 'Product A' },
        { id: 'b', name: 'Product B' },
        { id: 'c', name: 'Product C' }
      ]
    }
  }
}
</script>

<style>
.list>li>a {
  color: black;
}

.list>li>a:hover {
  font-weight: bold;
}
</style>
