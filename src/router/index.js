import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home
  },
  {
    path: "/films",
    name: "Films",
    props: true,
    component: ()=> import(/*webpackChunkNAme: "Films"*/"../views/Films.vue")
  },
  {
    path: "/ghiblifilmdetails",
    name: "ghibli-film-detail",
    props: true,
    component: ()=> import(/*webpackChunkNAme: "Films"*/"../views/GhibliFilmDetail.vue")
  },
  {
    path: "/charts",
    name: "Charts",
    props: true,
    component: ()=> import(/*webpackChunkNAme: "Charts"*/"../views/Charts.vue")
  },
  {
    path: "/lists",
    name: "Lists",
    props: true,
    component: ()=> import(/*webpackChunkNAme: "Lists"*/"../views/Lists.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
