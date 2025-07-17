import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import App from "./App.vue";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  rtl: false, // 或 true，視語系是否右對齊
});

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
