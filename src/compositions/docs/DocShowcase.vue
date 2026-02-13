<script setup lang="ts">
import type { ShowcaseProps } from './types';
import { Tabs } from '@/blocks';

defineProps<ShowcaseProps>();
</script>

<template>
  <div class="flex flex-col w-full gap-4">
    <header class="flex flex-col gap-4">
      <h1 class="text-3xl text-content-text font-bold">{{ title }}</h1>

      <p v-if="description" class="text-lg text-content-text-secondary">{{ description }}</p>
    </header>

    <Tabs :tabs="tabs" :activeIndex="0" />
  </div>
</template>
