<template>
  <a-drawer
    v-model:open="getShowDrawer"
    class="custom-class"
    title="Edit visible columns"
    placement="right"
    :keyboard="true"
  >
    <div class="w-full flex flex-col mb-4" v-for="columnGroup in getColumnGroups" :key="columnGroup.key">
      <div class="flex flex-col">
        <h3 class="w-full text-2xl">
          {{ columnGroup.title }}
        </h3>
        <div class="w-full flex flex-col mt-2" v-for="column in columnGroup.columns" :key="column.key">
          <a-checkbox v-model:checked="column.isActive">{{ column.title }}</a-checkbox>
        </div>
      </div>
    </div>
  </a-drawer>

</template>
<script>

  import draggable from 'vuedraggable'
  import { useQuantifyPivotTableStore } from './store'
  export default {
    components: {
      draggable
    },
    emits: ['update:showDrawer'],
    props: {
      showDrawer: {
        type: Boolean,
        required: true,
        default: false
      },
    },
    computed: {
      getColumnGroups() {
        return useQuantifyPivotTableStore().getColumnGroups
      },
      getShowDrawer: {
        get() {
          return this.showDrawer
        },
        set(val) {
          this.$emit('update:showDrawer', val)
        }
      },
    }
  }

</script>