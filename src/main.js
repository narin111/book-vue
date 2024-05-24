import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import MainPage from '@/views/MainPage'
import Login from '@/views/Login'

const routes = [
    {path:'/', component: MainPage},
    {path:'/login', component: Login}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
createApp(App).use(router).mount('#app')
