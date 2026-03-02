<script setup lang="ts">
import { provide, ref, watch } from 'vue';

import type { TabProps } from './types';

const props = defineProps<TabProps>();

const emit = defineEmits<{
  'update:value': [value: string];
}>();

const activeValue = ref<string>(props.value);

watch(
  () => props.value,
  (val) => {
    if (val !== undefined) activeValue.value = val;
  },
);

function isActive(value: string): boolean {
  return activeValue.value === value;
}

function activate(value: string): void {
  activeValue.value = value;

  emit('update:value', value);
}

provide('tabs', { isActive, activate });
</script>

<template>
  <div class="flex flex-col gap-4">
    <slot />
  </div>
</template>
