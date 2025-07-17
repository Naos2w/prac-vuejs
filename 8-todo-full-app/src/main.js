import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import store from "./store";
import axios from "axios";

Vue.use(Vuetify);
Vue.prototype.$axios = axios;

const vuetify = new Vuetify({
  rtl: false,
  icons: {
    iconfont: "md", // ✅ 確保與引入的匹配
  },
});

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
