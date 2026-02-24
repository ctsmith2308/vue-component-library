<script setup lang="ts">
import { computed } from 'vue';

interface ToggleSwitchProps {
  modelValue: boolean;
  label?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  labelPosition?: 'left' | 'right';
}

const props = withDefaults(defineProps<ToggleSwitchProps>(), {
  disabled: false,
  size: 'md',
  labelPosition: 'right',
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const sizeClasses = {
  sm: {
    track: 'w-8 h-4',
    thumb: 'w-3 h-3',
    translate: 'translate-x-4',
  },
  md: {
    track: 'w-11 h-6',
    thumb: 'w-5 h-5',
    translate: 'translate-x-5',
  },
  lg: {
    track: 'w-14 h-7',
    thumb: 'w-6 h-6',
    translate: 'translate-x-7',
  },
};

const trackClasses = computed(() => [
  'relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out',
  sizeClasses[props.size].track,
  {
    'bg-brand': props.modelValue,
    'bg-surface-border': !props.modelValue,
    'opacity-50 cursor-not-allowed': props.disabled,
    'cursor-pointer': !props.disabled,
  },
]);

const thumbClasses = computed(() => [
  'inline-block rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out',
  sizeClasses[props.size].thumb,
  {
    [sizeClasses[props.size].translate]: props.modelValue,
    'translate-x-0.5': !props.modelValue,
  },
]);

const toggle = () => {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue);
  }
};

const containerClasses = computed(() => [
  'inline-flex items-center gap-3',
  {
    'flex-row-reverse': props.labelPosition === 'left',
  },
]);
</script>

<template>
  <div class="inline-flex items-center gap-3">
    <div :class="containerClasses">
      <button
        type="button"
        role="switch"
        :aria-checked="modelValue"
        :aria-label="label"
        :class="trackClasses"
        :disabled="disabled"
        @click="toggle"
      >
        <span :class="thumbClasses"></span>
      </button>

      <label v-if="label" class="text-sm text-content-text cursor-pointer select-none" @click="toggle">
        {{ label }}
      </label>
    </div>
  </div>
</template>
