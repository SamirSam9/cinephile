import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
function load(component) {
  return () => import(`../views/HomePage${component}.vue`) 
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/movie',
      name: 'Movie',
      component: load('MoviesPage'),
    },
    {
      path: '/tv',
      name: 'Tv',
      component: load('TvsPage'),
    },
    {
      path: '/search',
      name: 'Search',
      component: load('SearchPage'),
    },
    {
      path: '/:catchAll(.*)*',
      name: 'Not Found',
      component: load('404 Not Found'),
    },
  ]
})

export default router
