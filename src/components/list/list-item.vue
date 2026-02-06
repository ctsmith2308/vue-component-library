<script setup lang="ts">
import { computed } from 'vue'

// const emit = defineEmits<{
//   (e: 'click'): void
// }>()

// const emitClick = () => {
//   emit('click')
// }

const classes = computed(() => [
  'cursor-pointer hover:bg-gray-100 px-3 py-2 text-sm transition-colors',
])
</script>


<template>
  <li :class="classes">
    <slot />
  </li>
</template>

