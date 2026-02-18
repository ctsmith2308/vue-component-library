<script setup lang="ts">
import type { ButtonSize } from '@/blocks';

interface SpinnerProps {
  size?: ButtonSize;
  animationDuration?: string;
}

withDefaults(defineProps<SpinnerProps>(), {
  size: 'md',
  animationDuration: '1.4s',
});

const sizeMap: Record<ButtonSize, number> = {
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  jumbo: 36,
};
</script>

<template>
  <svg
    class="spinner text-brand-dark"
    :width="sizeMap[size]"
    :height="sizeMap[size]"
    viewBox="25 25 50 50"
    :style="{ animationDuration }"
  >
    <circle
      class="spinner-circle"
      cx="50"
      cy="50"
      r="20"
      fill="none"
      stroke="currentColor"
      stroke-width="6"
      stroke-miterlimit="10"
      :style="{ animationDuration }"
    />
  </svg>
</template>

<style scoped>
.spinner {
  animation: spinner-rotate linear infinite;
  transform-origin: center center;
}

.spinner-circle {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: spinner-dash ease-in-out infinite;
}

@keyframes spinner-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinner-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
</style>
