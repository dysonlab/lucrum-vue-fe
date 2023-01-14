import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue"
import Register from "@/views/Register"
import UnderDevelopment from "@/views/UnderDevelopment"

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: UnderDevelopment
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;