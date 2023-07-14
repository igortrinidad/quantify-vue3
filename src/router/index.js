import { createRouter, createWebHistory } from 'vue-router'
import QuantifyPivotTableView from '../views/QuantifyPivotTableView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: QuantifyPivotTableView
    },
  ]
})

export default router
