import { createRouter, createWebHistory } from 'vue-router'
import HomeIndex from '../views/HomeIndex.vue'
import QuantifyPivotTableView from '../views/QuantifyPivotTableView.vue'
import AgGridView from '../views/AgGridView.vue'
import VuePivottableView from '../views/VuePivottableView.vue'
import VuePivotTablePlusView from '../views/VuePivotTablePlusView.vue'
import TipTapView from '../views/TipTapView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeIndex
    },
    {
      path: '/quantify-custom-table',
      component: QuantifyPivotTableView
    },
    {
      path: '/ag-grid',
      component: AgGridView
    },
    {
      path: '/vue-pivottable',
      component: VuePivottableView
    },
    {
      path: '/vue-pivot-table-plus',
      component: VuePivotTablePlusView
    },
    {
      path: '/tip-tap-vue',
      component: TipTapView
    },
  ]
})

export default router
