<template>
  <div class="w-full flex flex-col p-8 border rounded p-8">
    <h1>Click outside to test</h1>
    <div v-click-outside="testClickOutside" class="w-full p-8 bg-gray-200 rounded">
      <h1>Click inside to test</h1>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    testClickOutside() {
      alert('Clicked outside button')
    }
  }
}
</script>