import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('./views/Events.vue')
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import('./views/Pay.vue')
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: () => import('./views/Tickets.vue')
    }
  ]
})
