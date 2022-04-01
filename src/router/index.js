import {createRouter , createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'ngolahraga.auth.login',
        component:() => import("../views/auth/Login.vue")
    },
    {
        path :'/register',
        name: 'ngolahraga.auth.register',
        component:() => import("../views/auth/Register.vue")  
    },
    {
        path :'/forgot-password',
        name: 'ngolahraga.auth.forgot_password',
        component:() => import("../views/auth/ForgotPassword.vue")  
    },
    {
        path: '/',
        name: 'ngolahraga.index',
        component: () => import("../views/Index.vue")
    },
    {
        path: '/events',
        name: 'ngolahraga.events.index',
        component: () => import("../views/events/Index.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
}); 

export default router;