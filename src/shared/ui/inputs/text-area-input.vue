<script setup lang="ts">
defineProps<{
  name: string;
  id: string;
}>();
</script>

<template>
  <label :for="id" class="visually-hidden"></label>

  <textarea :id="id" :name="name" rows="5" cols="30" class="input-base h-20 border-base hocus-base">
    This is default text that appears when the page loads.
  </textarea>
</template>

<style scoped>
.visually-hidden {
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}
</style>
