<template>
  <div>
    <div class="text-h1">Posts</div>
    <v-progress-circular v-if="loading" indeterminate color="primary" :size="50" />
    <p v-if="error" class="error">{{ error }}</p>
    <v-list v-if="!loading && !error">
      <v-list-item-group class="group">
        <v-list-item v-for="post in posts" :key="post.id">
          <div>{{ post.title }}</div>
          <v-spacer />

          <v-btn @click="deletePost(post.id)">Delete</v-btn>

        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: [],
      loading: false,
      error: null
    }
  },
  created() {
    this.fetchPosts()
  },
  methods: {
    async fetchPosts() {
      this.loading = true
      this.error = null
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20')
        this.posts = res.data
      } catch (err) {
        this.error = 'Failed to fetch posts.'
      } finally {
        this.loading = false
      }
    },
    async deletePost(id) {
      this.loading = true
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        this.posts = this.posts.filter(p => p.id !== id)
      } catch (err) {
        this.error = 'Failed to delete post.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
