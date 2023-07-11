<script setup>
import VuePivottable from '@/packages/vue-pivottable/Pivottable.js'
</script>

<template>
  <main>
    <VuePivottable
      :data="[{color: 'blue', shape: 'circle'},{color: 'red', shape: 'triangle'}]"
      :rows="['color']"
      :cols="['shape']"
    >
    </VuePivottable>
  </main>
</template>
