import Vue from "vue";
import Router from "vue-router";
import All from "../views/All.vue";
import Active from "../views/Active.vue";
import Completed from "../views/Completed.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: All },
    { path: "/active", component: Active },
    { path: "/completed", component: Completed },
  ],
});
