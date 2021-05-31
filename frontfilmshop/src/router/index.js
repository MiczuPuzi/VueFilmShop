import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Films from "@/views/Films.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        alias: ['/', ''],
        name: 'Home',
        component: Home
    },
    {
        path: '/films',
        name: 'Films',
        component: Films
    }
]

const router = new VueRouter({
    routes
})

export default router
