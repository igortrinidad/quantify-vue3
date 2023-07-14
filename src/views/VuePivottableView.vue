<script setup>
import VuePivottable from '@/packages/vue-pivottable/Pivottable.js'
</script>

<template>
  <main>
    <h1 class="text-2xl font-bold">vue-pivottable</h1>
    <VuePivottable
      :data="[{color: 'blue', shape: 'circle'},{color: 'red', shape: 'triangle'}]"
      :rows="['color']"
      :cols="['shape']"
    >
    </VuePivottable>
  </main>
</template>
