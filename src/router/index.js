import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
