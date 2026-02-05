<script setup lang="ts">
import { computed } from 'vue'

type ButtonColor = 'primary' | 'secondary' | 'success' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'jumbo'
type ButtonVariant = 'outlined' | 'link'

interface ButtonProps {
  label: string
  color?: ButtonColor
  size?: ButtonSize
  variant?: ButtonVariant
  raised?: boolean
  rounded?: boolean
  icon?: string
  loading?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
  rounded: false,
  icon: '',
})

const colorKeys = {
  primary: 'bg-primary hover:bg-primary-heavy text-white',
  secondary: 'bg-secondary hover:bg-secondary-heavy text-white',
  success: 'bg-success hover:bg-success-heavy text-white',
  danger: 'bg-danger hover:bg-danger-heavy text-white',
}

const outlinedKeys = {
  primary: 'bg-white hover:bg-primary-light border-1 border-primary text-primary',
  secondary: 'bg-white hover:bg-secondary-light border-1 border-secondary text-secondary',
  success: 'bg-white hover:bg-success-light border-1 border-success text-success',
  danger: 'bg-white hover:bg-danger-light border-1 border-danger text-danger',
}

const sizeKeys = {
  sm: 'h-6 max-w-24 w-full',
  md: 'h-8 max-w-32 w-full',
  lg: 'h-10 max-w-40 w-full',
  xl: 'h-12 max-w-48 w-full',
  jumbo: 'h-16 max-w-64 w-full',
}

const base = 'inline-flex items-center justify-center gap-2 px-4 py-2'

const colorClass = computed(() =>
  props.disabled
    ? 'bg-gray-200 hover:bg-gray-200'
    : props.variant === 'outlined'
      ? outlinedKeys[props.color]
      : props.variant === 'link'
        ? 'hover:underline text-black'
        : colorKeys[props.color],
)

const sizeClass = computed(() => sizeKeys[props.size])

const roundedClass = computed(() => (props.rounded ? 'rounded-full' : 'rounded-md'))

const hoverClass = computed(() =>
  props.loading ? 'cursor-progress' : props.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
)

const classes = computed(() => [
  base,
  colorClass.value,
  sizeClass.value,
  hoverClass.value,
  roundedClass.value,
])
</script>

<template>
  <button :class="classes">
    <!-- {icon && <svg class="w-5 h-5">...</svg>} -->
    <span>
      {{ label }}
    </span>
  </button>
</template>
