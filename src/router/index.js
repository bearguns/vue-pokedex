import Vue from "vue";
import VueRouter from "vue-router";
import Pokedex from "../views/Pokedex.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Pokedex",
    component: Pokedex
  },
  {
    path: "/pokemon/:id",
    name: "Pokemon",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pokemon.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
