<script setup lang="ts">
import { computed, useSlots } from 'vue';

import type { ButtonColor, ButtonSize, ButtonVariant } from './types';

import { ButtonSpinner } from '@/blocks';

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
  primary: 'bg-brand hover:bg-brand-solid-hover text-brand-contrast',
  secondary: 'bg-secondary hover:bg-secondary-solid-hover text-secondary-contrast',
  success: 'bg-success hover:bg-success-solid-hover text-success-contrast',
  danger: 'bg-danger hover:bg-danger-solid-hover text-danger-contrast',
};

const outlinedKeys = {
  primary: 'bg-transparent hover:bg-brand-ghost-hover border border-brand text-brand',
  secondary: 'bg-transparent hover:bg-secondary-ghost-hover border border-secondary text-secondary',
  success: 'bg-transparent hover:bg-success-ghost-hover border border-success text-success',
  danger: 'bg-transparent hover:bg-danger-ghost-hover border border-danger text-danger',
};

const ghostStyle = 'bg-surface border border-surface-border hover:border-brand text-content-text hover:text-brand';

const sizeKeys = {
  sm: 'h-6',
  md: 'h-8',
  lg: 'h-10',
  xl: 'h-12',
  jumbo: 'h-16',
};

const iconSizeKeys = {
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
  xl: 'size-8',
  jumbo: 'size-10', // fallback to xl — no Icon size beyond xl
};

const base = 'inline-flex items-center justify-center gap-2';

const colorClass = computed(() => {
  if (props.disabled) return 'bg-disabled-bg text-disabled-text border-disabled-border';
  if (props.variant === 'ghost') return ghostStyle;
  if (props.variant === 'outlined') return outlinedKeys[props.color];
  if (props.variant === 'text') return `${outlinedKeys[props.color]} border-none`;
  if (props.variant === 'link') return 'hover:underline text-content-text';
  return colorKeys[props.color];
});

const sizeClass = computed(() => sizeKeys[props.size]);

const raisedClass = computed(() => props.raised && 'shadow-md/30');

const roundedClass = computed(() => (props.rounded ? 'rounded-full' : 'rounded-md'));

const hoverClass = computed(() =>
  props.loading ? 'cursor-progress' : props.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
);

const iconPositionClass = computed(() => (props.iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row'));

const isIconOnly = computed(() => !!slots.icon && !props.label);

const iconWrapperClass = computed(() => iconSizeKeys[props.size]);

const classes = computed(() => [
  base,
  colorClass.value,
  isIconOnly.value ? 'aspect-square !p-0' : 'px-4',
  sizeClass.value,
  raisedClass.value,
  hoverClass.value,
  roundedClass.value,
  iconPositionClass.value,
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
