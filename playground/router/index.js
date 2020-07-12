import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '~/views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/apollo',
    component: () => import('~/views/apollo.vue'),
  },
  {
    path: '/direct-message',
    component: () => import('~/views/direct-message.vue'),
  },
  {
    path: '/user',
    component: () => import('~/views/user.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
