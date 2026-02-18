<script setup lang="ts">
import { computed } from 'vue';

interface ProgressSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  strokeWidth?: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
}

const props = withDefaults(defineProps<ProgressSpinnerProps>(), {
  size: 'md',
  strokeWidth: '4',
  color: 'primary',
});

const sizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-10 h-10',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24',
};

const colorClasses = {
  primary: 'text-brand',
  secondary: 'text-brand-secondary',
  success: 'text-success',
  danger: 'text-danger',
};

const spinnerClasses = computed(() => [
  'spinner animate-spin',
  sizeClasses[props.size],
  colorClasses[props.color],
]);
</script>

<template>
  <div class="progress-spinner inline-flex items-center justify-center">
    <svg
      :class="spinnerClasses"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        :stroke-width="strokeWidth"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  </div>
</template>
