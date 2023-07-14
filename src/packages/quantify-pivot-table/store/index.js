import { defineStore } from 'pinia'
import { COLUMN_GROUPS_EXAMPLE, TABLE_DATA_EXAMPLE } from './enums'
export const useQuantifyPivotTableStore = defineStore('quantifyPivotTableStore', {

  state: () => ({ 
    columnGroups: COLUMN_GROUPS_EXAMPLE,
    tableData: TABLE_DATA_EXAMPLE
  }),

  getters: {
    getColumnGroups: (state) => state.columnGroups,
    getColumnGroupsWithActiveColumns: (state) => {
      return state.columnGroups.map((columnGroup) => {
        return {
          ...columnGroup,
          columns: columnGroup.columns.filter((column) => column.isActive)
        }
      })
    },
    getTableData: (state) => state.tableData,
  },

  actions: {

    setColumnGroups(columnGroups) {
      this.columnGroups = columnGroups
    },

    updateColumnGroupColumns(columnGroupIndex, value) {
      this.columnGroups[columnGroupIndex].columns = value
    },
  },
})
