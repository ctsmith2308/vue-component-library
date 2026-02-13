<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  tabIdx: number;
  isSelected: boolean;
}>();

const emit = defineEmits<{
  selectTab: [index: number];
}>();

const selectTab = () => {
  emit('selectTab', props.tabIdx);
};

const tabClass = computed(() => [
  'px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2',
  {
    'text-brand border-b-2 border-brand': props.isSelected,
    'text-content-text-secondary hover:text-content-text hover:bg-surface-alt': !props.isSelected,
  },
]);
</script>

<template>
  <button :class="tabClass" role="tab" :aria-selected="isSelected" @click="selectTab">
    <slot />
  </button>
</template>
