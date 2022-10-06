import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WishListView from "../views/WishListView.vue";
import RelationshipView from "../views/RelationshipView.vue";
import WelcomeView from "../views/WelcomeView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { transition: "slide-left" },
    },
    {
      path: "/wishlist",
      name: "wishlist",
      component: WishListView,
      meta: { transition: "slide-left" },
    },
    {
      path: "/welcome",
      name: "welcome",
      component: WelcomeView,
      meta: { transition: "slide-left" },
    },
    {
      path: "/relationship",
      name: "relationship",
      component: RelationshipView,
      meta: { transition: "slide-left" },
    },
  ],
});

export default router;
