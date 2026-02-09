<script setup lang="ts">
import { computed } from 'vue';

interface ButtonProps {
  label?: string;
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  raised?: boolean;
  rounded?: boolean;
  icon?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

type ButtonColor = 'primary' | 'secondary' | 'success' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'jumbo';
type ButtonVariant = 'outlined' | 'link' | 'text';

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
  rounded: false,
  icon: false,
});

const colorKeys = {
  primary: 'bg-brand hover:bg-brand-heavier text-white',
  secondary: 'bg-brand-secondary hover:bg-brand-secondary-heavier text-white',
  success: 'bg-success hover:bg-success-heavier text-white',
  danger: 'bg-danger hover:bg-danger-heavier text-white',
};

const outlinedKeys = {
  primary: 'bg-white hover:bg-brand-lighter border-1 border-brand text-brand',
  secondary: 'bg-white hover:bg-brand-secondary-lighter border-1 border-brand-secondary text-brand-secondary',
  success: 'bg-white hover:bg-success-lighter border-1 border-success text-success',
  danger: 'bg-white hover:bg-danger-lighter border-1 border-danger text-danger',
};

const sizeKeys = {
  sm: 'h-6 max-w-24 w-full',
  md: 'h-8 max-w-32 w-full',
  lg: 'h-10 max-w-40 w-full',
  xl: 'h-12 max-w-48 w-full',
  jumbo: 'h-16 max-w-64 w-full',
};

const base = 'inline-flex items-center justify-center gap-2 px-4 py-2';

/** Conditionally assigns color, variant and disabled styles */
const colorClass = computed(() =>
  props.disabled
    ? 'bg-gray-200 hover:bg-gray-200'
    : props.variant === 'outlined'
      ? outlinedKeys[props.color]
      : props.variant === 'text'
        ? `${outlinedKeys[props.color] + ' border-none'}`
        : props.variant === 'link'
          ? 'hover:underline text-black'
          : colorKeys[props.color],
);

const sizeClass = computed(() => sizeKeys[props.size]);

const raisedClass = computed(() => props.raised && 'shadow-md/30');

const roundedClass = computed(() => (props.rounded ? 'rounded-full' : 'rounded-md'));

const hoverClass = computed(() =>
  props.loading ? 'cursor-progress' : props.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
);

const inlineAttributes = computed(() => {
  return {
    disabled: props.loading || props.disabled,
  };
});

const classes = computed(() => [
  base,
  colorClass.value,
  sizeClass.value,
  raisedClass.value,
  hoverClass.value,
  roundedClass.value,
]);
</script>

<template>
  <button :class="classes" v-bind="inlineAttributes">
    <span v-if="icon">
      <slot />
    </span>

    <span>
      {{ label }}
    </span>
  </button>
</template>
