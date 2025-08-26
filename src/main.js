import { createApp } from 'vue'

// import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import router from "@/components/routes"

// import Test from "@/components/test.vue"


// const routerHistory =createWebHistory();


// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         { path: '/test', component: Test },
//     ]
// });

import  '../assets/scss/main.scss'

// createApp(App).mount('#app')
const app = createApp(App);


app.use(router);

app.mount('#app');
