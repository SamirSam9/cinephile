import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomePage.vue'

function load(component) {
  return () => import(`@/views/${component}.vue`)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movie',
      name: 'movies',
      component: load('MoviesPage')
    },
    {
      path: '/search',
      name: 'search',
      component: load('SearchPage')
    },
    {
      path: '/tv',
      name: 'tv',
      component: load('TvPage')
    },
    {
      path: '/:catchAll(.*)*',
      name: 'notfount',
      component: load('404')
    },

  ]
})

export default router
