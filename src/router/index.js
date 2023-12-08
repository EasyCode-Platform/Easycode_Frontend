import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home'),
    },
    {
        path: '/deploy/:appid',
        name: 'Deploy',
        component: () => import('@/views/Deploy'),
    },
    {
        path: '/database-manager',
        name: 'DatabaseManager',
        component: () => import('@/views/DatabaseManager'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login'), // 创建登录页面组件并引入
    },
    {
        path: '/register', // Define the path for the registration page
        name: 'Signin', // Name the route
        component: () => import('@/views/signin'), // Use the Signin component
    },
    {
        path: '/house',
        name: 'House',
        component: () => import('@/views/House'), // 创建仓库页面组件并引入
    },
]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})
