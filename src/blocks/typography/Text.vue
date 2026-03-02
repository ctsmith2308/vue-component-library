<script setup lang="ts">
import { computed } from 'vue';

import type { TextProps } from './types';

const props = withDefaults(defineProps<TextProps>(), {
  tag: 'p',
  size: 'md',
  color: 'muted',
});

const sizeKeys = {
  sm: 'text-body-sm',
  md: 'text-body-md',
  lg: 'text-body-lg',
};

const colorKeys = {
  default: 'text-content-text',
  muted: 'text-content-text-muted',
  secondary: 'text-content-text-secondary',
  danger: 'text-danger',
  brand: 'text-brand',
};

const textClass = computed(() => [sizeKeys[props.size], colorKeys[props.color]]);
</script>

<template>
  <component :is="tag" :class="textClass">
    <slot />
  </component>
</template>
