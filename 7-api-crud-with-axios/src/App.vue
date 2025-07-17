<template>
  <v-app>
    <v-main>
      <PostList />
    </v-main>
  </v-app>
</template>

<script>
import PostList from './components/PostList.vue'
export default { components: { PostList } }
</script>
