import './assets/main.css'
import {createApp} from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'

import AddMedia from "@/components/AddMedia.vue";
import Assessment from "@/components/Assessment.vue";
import App from "@/App.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Assessment},
        {path: '/add-media', component: AddMedia},
    ],
})

const app = createApp(App)
app
    .use(router)
    .mount('#app')
