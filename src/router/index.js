import { createRouter, createWebHistory } from 'vue-router'
import VuePivottableView from '../views/VuePivottableView.vue'
import VuePivotTablePlusView from '../views/VuePivotTablePlusView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: VuePivottableView
    },
    {
      path: '/vue-pivot-table-plus',
      component: VuePivotTablePlusView
    },
  ]
})

export default router
