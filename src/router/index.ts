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
    name: 'Index',
    component: Index,
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'favorite',
        component: Favorite,
      },
      {
        path: 'settings',
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
