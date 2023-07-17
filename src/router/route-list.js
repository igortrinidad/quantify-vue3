export default [
  {
    path: '/',
    title: 'Home',
    component: () => import('../views/HomeIndex.vue')
  },
  {
    path: '/quantify-custom-table',
    title: 'quantify-custom-table',
    component: () => import('../views/QuantifyPivotTableView.vue')
  },
  {
    path: '/ag-grid',
    title: 'AG Grid',
    component: () => import('../views/AgGridView.vue')
  },
  {
    path: '/vue-pivottable',
    title: 'vue-pivottable',
    component: () => import('../views/VuePivottableView.vue')
  },
  {
    path: '/vue-pivot-table-plus',
    title: 'vue-pivot-table-plus',
    component: () => import('../views/VuePivotTablePlusView.vue')
  },
  {
    path: '/tip-tap-vue',
    title: 'tip-tap-vue',
    component: () => import('../views/TipTapView.vue')
  },
  {
    path: '/click-outside',
    title: 'Custom click-outside directive',
    component: () => import('../views/ClickoutsideDirectiveView.vue')
  },
  {
    path: '/apex-charts',
    title: 'vue-apex-charts',
    component: () => import('../views/VueApexChartsView.vue')
  },
]