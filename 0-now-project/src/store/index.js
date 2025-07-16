import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    cart: [],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addToCart(state, item) {
      const exists = state.cart.find((i) => i.id === item.id);
      if (exists) exists.qty++;
      else state.cart.push({ ...item, qty: 1 });
    },
    removeFromCart(state, id) {
      state.cart = state.cart.filter((i) => i.id !== id);
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => commit("increment"), 500);
    },
  },
  getters: {
    cartTotalQty(state) {
      return state.cart.reduce((sum, i) => sum + i.qty, 0);
    },
  },
});
