<script setup lang="ts">
import { type Tab, Tabs } from '@/blocks';

defineProps<{
  title: string;
  description?: string;
  tabs: Tab[];
}>();
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4">
      <h1 class="text-3xl text-content-text font-bold">{{ title }}</h1>

      <p v-if="description" class="text-lg text-content-text-secondary">{{ description }}</p>
    </div>

    <Tabs :tabs="tabs" :activeIndex="0" />
  </div>
</template>
