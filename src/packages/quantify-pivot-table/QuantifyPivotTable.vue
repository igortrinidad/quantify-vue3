<template>
  <div class="w-full max-w-full">
    
    <!-- COLUMN GROUPS -->
    <draggable 
      v-model="getColumnGroups" 
      group="columnGroups"
      item-key="key"
      ghost-class="ghost"
      animation="200"
      class="quantify-pivot-table-column-groups overflow-x-auto flex transition-all duration-200 max-h-[60vh] overflow-y-auto"
      :component-data="{
        tag: 'div',
        type: 'transition-group',
        name: !drag ? 'flip-list' : null
      }"
    >
      <template #item="{ element, index }">
        <div class="flex flex-col cursor-move border">
          <div class=" px-4 py-2 whitespace-nowrap bg-gray-200 sticky top-0">
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
        drag: false,
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

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

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