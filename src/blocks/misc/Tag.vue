<script setup lang="ts">
import { computed } from 'vue';

interface TagProps {
  value: string;
  severity?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  rounded?: boolean;
  icon?: boolean;
}

const props = withDefaults(defineProps<TagProps>(), {
  severity: 'primary',
  rounded: false,
  icon: false,
});

const severityClasses = {
  primary:   'bg-brand text-brand-contrast',
  secondary: 'bg-secondary text-secondary-contrast',
  success:   'bg-success text-success-contrast',
  danger:    'bg-danger text-danger-contrast',
  warning:   'bg-warning text-warning-contrast',
  info:      'bg-info text-info-contrast',
};

const tagClasses = computed(() => [
  'inline-flex items-center gap-2 px-2.5 py-1 text-xs font-semibold',
  severityClasses[props.severity],
  props.rounded ? 'rounded-full' : 'rounded',
]);
</script>

<template>
  <span :class="tagClasses">
    <span v-if="icon" class="flex items-center">
      <slot name="icon"></slot>
    </span>
    {{ value }}
  </span>
</template>
