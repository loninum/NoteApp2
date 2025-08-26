import {createRouter, createWebHistory } from 'vue-router'
// import Test from "@/components/test.vue"
import HomePage from "@/pages/home.vue"
import AboutPage from '@/pages/about.vue';
import notFoundPage from '@/pages/notFound.vue';

const routerHistory =createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
        { path: '/', 
            name: "home",
            component: HomePage },
        { path: '/about',
            name: "about",
             component:AboutPage },
        { path: '/:CatchAll(.*)', 
            name: "404",
            component: notFoundPage }
    ]
});

export default router;