<script setup lang="ts">
import { computed, useSlots } from 'vue';

import type { ButtonColor, ButtonSize, ButtonVariant } from './types';

import ButtonSpinner from './ButtonSpinner.vue';

interface ButtonProps {
  label?: string;
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  raised?: boolean;
  rounded?: boolean;
  loading?: boolean;
  disabled?: boolean;
  as?: 'button' | 'a';
  href?: string;
  iconPosition?: 'left' | 'right';
}

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
  raised: false,
  rounded: false,
  as: 'button',
  iconPosition: 'left',
});

const slots = useSlots();

const colorKeys = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  success: 'btn-success',
  danger: 'btn-danger',
};

const outlinedKeys = {
  primary: 'btn-outlined-primary',
  secondary: 'btn-outlined-secondary',
  success: 'btn-outlined-success',
  danger: 'btn-outlined-danger',
};

const textKeys = {
  primary: 'btn-text-primary',
  secondary: 'btn-text-secondary',
  success: 'btn-text-success',
  danger: 'btn-text-danger',
};

const sizeKeys = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  xl: 'btn-xl',
  jumbo: 'btn-jumbo',
};

// Wrapper span sizing for slotted icons — matches Icon size prop scale
const iconSizeKeys = {
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
  xl: 'size-8',
  jumbo: 'size-8', // no Icon size beyond xl, fallback to xl
};

const colorClass = computed(() => {
  if (props.disabled) return 'btn-disabled';
  if (props.variant === 'ghost') return 'btn-ghost';
  if (props.variant === 'outlined') return outlinedKeys[props.color];
  if (props.variant === 'text') return textKeys[props.color];
  if (props.variant === 'link') return 'btn-link';
  return colorKeys[props.color];
});

const iconPositionClass = computed(() => (props.iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row'));

const isIconOnly = computed(() => !!slots.icon && !props.label);

const iconWrapperClass = computed(() => iconSizeKeys[props.size]);

const classes = computed(() => [
  'btn',
  colorClass.value,
  sizeKeys[props.size],
  isIconOnly.value ? 'btn-icon' : '',
  props.raised ? 'btn-raised' : '',
  props.rounded ? 'btn-rounded' : '',
  iconPositionClass.value,
  props.loading ? 'cursor-progress' : '',
]);
</script>

<template>
  <button v-if="props.as === 'button'" :class="classes" :disabled="loading || disabled" type="button">
    <ButtonSpinner v-if="loading" :size="size" color="currentColor" />

    <template v-else>
      <span v-if="slots.icon" :class="['flex items-center justify-center', iconWrapperClass]">
        <slot name="icon" />
      </span>

      <span v-if="label" class="whitespace-nowrap">
        {{ label }}
      </span>
    </template>
  </button>

  <a v-else :href="href" :class="classes" target="_blank">
    <span v-if="slots.icon" :class="['flex items-center justify-center', iconWrapperClass]">
      <slot name="icon" />
    </span>

    <span v-if="label" class="whitespace-nowrap">
      {{ label }}
    </span>
  </a>
</template>
