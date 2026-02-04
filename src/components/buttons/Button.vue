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
  primary: 'bg-blue-400 hover:bg-blue-500 text-white',
  secondary: 'bg-orange-300 hover:bg-orange-400 text-white',
  success: 'bg-green-500 hover:bg-green-600 text-white',
  danger: 'bg-red-500 hover:bg-red-700 text-white',
}

const outlinedKeys = {
  primary: 'bg-white hover:bg-blue-100 border-1 border-blue-200 text-blue-400',
  secondary: 'bg-white hover:bg-orange-100 border-1 border-orange-200 text-orange-300',
  success: 'bg-white hover:bg-green-100 border-1 border-green-200 text-green-500',
  danger: 'bg-white hover:bg-red-100 border-1 border-red-200 text-red-500',
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
  props.variant === 'outlined'
    ? outlinedKeys[props.color]
    : props.variant === 'link'
      ? 'hover:underline text-black'
      : colorKeys[props.color],
)

const sizeClass = computed(() => sizeKeys[props.size])

const roundedClass = computed(() => (props.rounded ? 'rounded-full' : 'rounded-md'))

const hoverClass = computed(() =>
  props.loading
    ? 'cursor-progress'
    : props.disabled
      ? 'cursor-not-allowed bg-gray-200 hover:bg-gray-200'
      : 'cursor-pointer',
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
