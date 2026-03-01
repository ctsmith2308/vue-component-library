<script setup lang="ts">
import { inject } from 'vue';

interface TabPanelProps {
  value: string;
}

defineProps<TabPanelProps>();

const tabs = inject<{
  isActive: (value: string) => boolean;
}>('tabs');
</script>

<template>
  <div v-if="tabs?.isActive(value)" role="tabpanel">
    <slot />
  </div>
</template>
