import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SinUp from "../views/SinUp.vue";
import LogIn from "../views/LogIn.vue";
import tryView from "../views/tryView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path: "/Sin-Up",
        name: "SinUp",
        component: SinUp,
    },
    {
        path: "/LogIn",
        name: "LogIn",
        component: LogIn,
    },
    {
        path: "/try",
        name: "tryView",
        component: tryView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
