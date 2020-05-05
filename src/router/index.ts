import Vue from 'vue'
import { RouteConfig } from 'vue-router'
import Index from '@/views/Index.vue'
import Home from '@/views/Home.vue'
import Favorite from '@/views/Favorite.vue'
import Settings from '@/views/Settings.vue'
import { IonicVueRouter } from '@ionic/vue'

Vue.use(IonicVueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '',
        name: 'Index',
        component: Home,
      },
      {
        path: 'favorite',
        name: 'Favorite',
        component: Favorite,
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings,
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
]

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
