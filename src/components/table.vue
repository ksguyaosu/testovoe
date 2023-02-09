<template>
  <ag-grid-vue
      class="ag-theme-alpine"
      style="height: 177px; margin-top: 150px"
      :columnDefs="columnDefs.value"
      :rowData="rowData.value"
      :defaultColDef="defaultColDef"
  >
  </ag-grid-vue>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3"
import { reactive, onMounted, ref } from "vue"

import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"

export default {
  name: "App",
  components: {
    AgGridVue,
  },
  setup() {
    const gridApi = ref(null);


    const onGridReady = (params) => {
      gridApi.value = params.api
    }

    const rowData = reactive({})


    const columnDefs = reactive({
      value: [
        { headerName: 'ФИО', field: 'questionnaire.last_name' },
        { headerName: 'Статус', field: "status" },
        { headerName: 'Дата прохождения', field: "finished_at" },
        { headerName: 'Тип отчета', field: "report_type" }
      ],
    });


    const defaultColDef = {
      sortable: true,
      filter: true,
      flex: 1
    };


    onMounted(() => {
      fetch("https://ei-adult.way2wei.space/response.json")
          .then((result) => result.json())
          .then((remoteRowData) => (rowData.value = remoteRowData))
    })

    return {
      onGridReady,
      columnDefs,
      rowData,
      defaultColDef
    }


  }
}
</script>

<style scoped>

</style>