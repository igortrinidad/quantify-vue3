<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="w-full h-full overflow-y-auto overflow-x-hidden">
    <RouterView />
  </div>
</template>

<style >

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
    width: 100vw;
    @apply text-gray-800;
  }


</style>
