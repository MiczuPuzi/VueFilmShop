import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '../views/Films.vue';
import Login from '../views/Login.vue';
import Opinions from "../views/Opinions.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/films',
        name: 'Films',
        component: Films,
    },
    {
        path: '/login',
        alias: ['/', ''],
        name: 'Login',
        component: Login
    },
    {
        path: '/opinions',
        name: 'Opinions',
        component: Opinions
    },
]

const router = new VueRouter({
    routes
})

export default router
