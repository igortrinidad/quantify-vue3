<template>
  <div class="w-full h-full items-center justify-center align-center grid grid-cols-2 gap-4">
    <router-link
      v-for="route in routeList"
      :key="route.path" 
      :to="route.path" 
      class="p-4 border rounded-lg border-blue-500 text-center"
    >
      {{ route.title }}
    </router-link>
  </div>
</template>
<script>
  import routeList from '@/router/route-list'

  export default {
    data() {
      return {
        routeList
      }
    },
  }

</script>