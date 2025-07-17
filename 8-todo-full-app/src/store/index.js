import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    setTodos(state, arr) {
      state.todos = arr;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    updateTodo(state, updated) {
      const idx = state.todos.findIndex((t) => t.id === updated.id);
      if (idx !== -1) Vue.set(state.todos, idx, updated);
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter((t) => t.id !== id);
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      commit("setTodos", res.data);
    },
    async createTodo({ commit }, title) {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          title,
          completed: false,
        }
      );
      commit("addTodo", res.data);
    },
    async toggleTodo({ commit }, todo) {
      const res = await axios.patch(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        {
          completed: !todo.completed,
        }
      );
      commit("updateTodo", res.data);
    },
    async removeTodo({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit("deleteTodo", id);
    },
  },
  getters: {
    allTodos: (state) => state.todos,
    activeTodos: (state) => state.todos.filter((t) => !t.completed),
    completedTodos: (state) => state.todos.filter((t) => t.completed),
  },
});
