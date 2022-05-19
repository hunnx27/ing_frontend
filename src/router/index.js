import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/home/HomeView.vue"
import AboutView from "../views/about/AboutView.vue"
import LoginView from "../views/login/LoginView.vue"
import QuasarSampleView from "../views/sample/QuasarSampleView.vue"


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
    },
    {
        path: "/quisarSample",
        name: "QuisarSample",
        component: QuasarSampleView,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;