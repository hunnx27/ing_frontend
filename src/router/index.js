import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        name: "Home",
        component: ()=> import('@/views/home/HomeView.vue'),
        meta: {
            layout: 'AppLayoutHome'
        }
    },
    {
        path: "/about",
        name: "About",
        component: ()=> import('@/views/about/AboutView.vue'),
        meta: {
            layout: 'AppLayoutAbout'
        }
    },
    {
        path: "/login",
        name: "Login",
        component: ()=> import('@/views/login/LoginView.vue'),
        meta: {
            layout: 'AppLayoutAbout'
        }
    },
    {
        path: "/quisarSample",
        name: "QuisarSample",
        component: ()=> import('@/views/sample/QuasarSampleView.vue'),
        meta: {
            layout: 'AppLayoutAbout'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;