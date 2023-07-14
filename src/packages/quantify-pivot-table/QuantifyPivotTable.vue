<template>
  <div class="w-full max-w-full bg-gray-100 p-4">
    
    <!-- COLUMN GROUPS -->
    <draggable 
      v-model="getColumnGroups" 
      group="columnGroups"
      class="quantify-pivot-table-column-groups overflow-x-auto flex "
      @start="drag=true" 
      @end="drag=false" 
      item-key="key"
      ghost-class="ghost"
    >
      <template #item="{ element, index }">
        <div class="flex flex-col cursor-move border ">
          <div class=" px-4 py-2 whitespace-nowrap bg-gray-200">
            {{ element.title }}
          </div>
          <QuantifyPivotTableColumns :column-group="element" :column-group-index="index" />
        </div>
      </template>
    </draggable>

    <a-button class="bg-blue-500" type="primary" @click="showDrawer = true">Edit visible columns</a-button>

    <QuantifyPivotTableDrawer v-model:showDrawer="showDrawer" />

  </div>
</template>
<script>
  import Draggable from 'vuedraggable'
  import { useQuantifyPivotTableStore } from './store'
  import QuantifyPivotTableColumns from './QuantifyPivotTableColumns.vue'
  import QuantifyPivotTableDrawer from './QuantifyPivotTableDrawer.vue'
  export default {
    components: {
      Draggable,
      QuantifyPivotTableDrawer,
      QuantifyPivotTableColumns
    },
    data() {
      return {
        showDrawer: false
      }
    },
    computed: {

      getColumnGroups: {
        get() {
          return useQuantifyPivotTableStore().getColumnGroupsWithActiveColumns
        },
        set(val) {
          useQuantifyPivotTableStore().setColumnGroups(val)
        }
      }
    },
    methods: {
      checkMove(evt) {
        if(!evt.relatedContext?.element) return true
        return typeof (evt.draggedContext.element.columns) === typeof (evt.relatedContext.element.columns)
      },

      getActiveColumns(columnGroup) {
        return columnGroup.columns.filter(column => column.isActive)
      },
    }
  }

</script>

<style lang="scss">

  .quantify-pivot-table {
    
    .ghost {
      opacity: 0.8;
    }
   
    & .list-columns {
      min-height: 24px;
      height: 100%;
    }
  }

</style>