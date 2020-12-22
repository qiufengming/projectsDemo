import Vue from 'vue'
import Router from 'vue-router'

const Layout = () => import('../views/layout/layout.component.vue');
const Login = () => import('../views/login/login.vue')

const router = new Router({
 // mode: 'history',
 routes: [
  {
   path: '/',
   name: 'home',
   redirect: '/home'
  },
  {
   path: '/home',
   name: 'home',
   component: Layout,
   children: [
    {
     path: '',
     components: {
      default: () => import('../views/home/home.vue'),
      home: () => import('../views/home/home.vue'),
      'tab-a': () => import('../components/tab-a/tab-a.vue')
     }
    },
   ],
  },
  {
   path: '/login',
   name: 'login',
   component: Login
  }
 ]
})

export default router;