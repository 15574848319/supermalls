import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const Category = () => import('views/category/Category')
const Home = () => import('views/home/Home')
const Profile = () => import('views/profile/Profile')
const Shopcart = () => import('views/shopcart/Shopcart')

const routes = [
    { path: '', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/category', component: Category },
    { path: '/profile', component: Profile },
    { path: '/shopcart', component: Shopcart }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router