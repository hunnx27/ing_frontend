import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/home/HomeView.vue"
import AboutView from "../views/about/AboutView.vue"
import LoginView from "../views/login/LoginView.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "About",
        component: AboutView,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginView,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;