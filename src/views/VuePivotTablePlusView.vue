<template>
  <div>
    <Pivot
      :data="data"
      v-model:fields="fields"
      :reducer="reducer"
      :showSettings="defaultShowSettings"
      >
    </Pivot>
  
  </div>

</template>

<script>

import Pivot from '@/packages/vue-pivot-table-plus/Pivot.vue'

export default {
  components: { Pivot },
  data: () => {
    return {
      data: Object.freeze([{ x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 }]),
      fields: {
        availableFields: [],
        rowFields: [{
          getter: item => item.x,
          label: 'X-axis'
        }, {
          getter: item => item.y,
          label: 'Y-axis',
        }],
        colFields: [{
          getter: item => item.z,
          label: 'Z-axis'
        }],
        fieldsOrder: {}
      },
      reducer: (sum) => sum + 1,
      defaultShowSettings: true,
      tableHeight: '400px'
    }
  }
}

</script>
