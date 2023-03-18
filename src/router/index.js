import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ErrorPage from "../views/ErrorPage.vue";
import RepoView from "../views/RepoView.vue";
import RepoDetails from "../views/RepoDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",

      component: () => import("../views/AboutView.vue"),
    },

    {
      path: "/repos",
      name: "repo",
      component: RepoView,
    },

    {
      path: "/:repoName",
      name: "repo-details",
      component: RepoDetails,
    },

    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: ErrorPage,
    },
  ],
});

export default router;
