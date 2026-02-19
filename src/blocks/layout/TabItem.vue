<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  isActive: boolean;
  label: string;
}>();

const tabClass = computed(() => [
  'px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2',
  {
    'text-brand-dark border-b-1 border-brand-dark': props.isActive,
    'text-content-text-secondary hover:text-brand hover:border-brand-lighter border-transparent border-b-1': !props.isActive,
  },
]);
</script>

<template>
  <button :class="tabClass" role="tab" :aria-selected="isActive">
    {{ label }}
  </button>
</template>
