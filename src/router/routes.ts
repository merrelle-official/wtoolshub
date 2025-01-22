import Home from "@/views/Home.vue";
import Settings from "@/views/Settings.vue";
import TimeTracker from "@/views/TimeTracker.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
    },
    {
        path: '/timetracker',
        name: 'TimeTracker',
        component:TimeTracker,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router