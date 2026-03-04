<script setup lang="ts">
import { computed } from 'vue';
import type { HeadingProps } from './types';

const props = defineProps<HeadingProps>();

const headingConfig = {
  1: { tag: 'h1', className: 'text-5xl font-extrabold text-content-text' },
  2: { tag: 'h2', className: 'text-4xl font-bold text-content-text' },
  3: { tag: 'h3', className: 'text-3xl font-semibold text-content-text' },
  4: { tag: 'h4', className: 'text-2xl font-semibold text-content-text' },
  5: { tag: 'h5', className: 'text-xl font-semibold text-content-text' },
} as const;

const heading = computed(() => headingConfig[props.size]);
</script>

<template>
  <component :is="heading.tag" :class="heading.className"><slot /></component>
</template>
