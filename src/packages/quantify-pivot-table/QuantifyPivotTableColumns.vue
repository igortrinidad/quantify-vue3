<template>
  <draggable 
    v-model="getColumnGroupColumns" 
    group="columnGroups" 
    @start="drag=true" 
    @end="drag=false" 
    item-key="key"
    tag="div"
    ghost-class="ghost"
    :move="checkMove"
    animation="200"
    class="list-columns flex"
    :component-data="{
      tag: 'div',
      type: 'transition-group',
      name: 'flip-list'
    }"
  >
    <template #item="{ element }">
      <div class="border whitespace-nowrap flex flex-col">
        <div class="cursor-move px-4 py-3">
          {{ element.title }}
        </div>
        <div 
          v-for="(data, dataIndex) in getTableData" 
          class="cursor-move px-4 py-3 "
          :key="`table-data-${ columnGroupIndex }-${ dataIndex }`"
        >
          <span v-if="element.formatter">{{ formatters[element.formatter](data[element.key]) }}</span>
          <span v-else>{{ data[element.key] }}</span>
        </div>
      </div>
    </template>
  </draggable>
</template>
<script>
  import Draggable from 'vuedraggable'
  import { useQuantifyPivotTableStore } from './store'
  import { formatters } from '@/composables/formatters'
  export default {
    components: { Draggable },
    props: {
      columnGroup: {
        type: Object,
        required: true
      },
      columnGroupIndex: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        formatters,
        drag: false,
      }
    },
    computed: {
      getColumnGroupColumns: {
        get() {
          return this.columnGroup.columns
        },
        set(val) {
          useQuantifyPivotTableStore().updateColumnGroupColumns(this.columnGroupIndex, val)
        }
      },
      getTableData() {
        return useQuantifyPivotTableStore().getTableData
      }
    },
    methods: {
      checkMove(evt) {
        if(!evt.relatedContext?.element) return true
        return typeof (evt.draggedContext.element.columns) === typeof (evt.relatedContext.element.columns)
      },
    }
  }

</script>

<style lang="scss">

  .list-columns {
    min-height: 100% !important;
    backdrop-filter: red;
  }
</style>