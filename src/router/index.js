import { createRouter, createWebHistory } from 'vue-router'
import VuePivottableView from '../views/VuePivottableView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: VuePivottableView
    },
  ]
})

export default router
