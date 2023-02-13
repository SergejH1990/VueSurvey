import { createRouter, createWebHistory } from "vue-router";

import Dashboard from '../views/Dashboard.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import Surveys from '../views/Surveys.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';

const routes = [
    {
        path: '/',
        redirect: '/Dashboard',
        component: DefaultLayout,
        children: [
            {
                path: '/Dashboard', name : 'Dashboard', component: Dashboard
            },
            {
                path: '/Surveys', name : 'Surveys', component: Surveys
            }
        ]
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;