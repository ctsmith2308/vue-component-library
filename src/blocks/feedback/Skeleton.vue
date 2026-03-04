<script setup lang="ts">
import { computed } from 'vue';

import type { SkeletonProps } from './types';

const props = withDefaults(defineProps<SkeletonProps>(), {
  width: '100%',
  height: '1rem',
  borderRadius: '0.375rem',
  animation: 'pulse',
  shape: 'rectangle',
});

const shapeStyles = computed(() => {
  if (props.shape === 'circle') {
    const size = props.size || props.height;

    return {
      width: size,
      height: size,
      borderRadius: '50%',
    };
  }

  if (props.shape === 'square') {
    const size = props.size || props.height;

    return {
      width: size,
      height: size,
      borderRadius: props.borderRadius,
    };
  }

  return {
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius,
  };
});

const animationClass = computed(() => {
  if (props.animation === 'pulse') return 'animate-pulse';
  if (props.animation === 'wave') return 'animate-wave';
  return '';
});
</script>

<template>
  <div :class="['rounded-md inline-block relative overflow-hidden bg-surface-alt', animationClass]" :style="shapeStyles">
    <slot></slot>
  </div>
</template>

<style scoped>
@keyframes wave {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-wave::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  animation: wave 1.5s infinite;
}
</style>
