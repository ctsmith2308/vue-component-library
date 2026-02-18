<script setup lang="ts">
import { computed } from 'vue';

interface ChipProps {
  label: string;
  removable?: boolean;
  icon?: boolean;
  image?: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
}

const props = withDefaults(defineProps<ChipProps>(), {
  removable: false,
  icon: false,
  color: 'primary',
});

const emit = defineEmits<{
  remove: [];
}>();

const colorClasses = {
  primary: 'bg-brand-lighter text-brand border-brand',
  secondary: 'bg-brand-secondary-lighter text-brand-secondary border-brand-secondary',
  success: 'bg-success-lighter text-success border-success',
  danger: 'bg-danger-lighter text-danger border-danger',
};

const chipClasses = computed(() => [
  'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border',
  colorClasses[props.color],
]);

const handleRemove = () => {
  emit('remove');
};
</script>

<template>
  <div :class="chipClasses">
    <img
      v-if="image"
      :src="image"
      :alt="label"
      class="w-5 h-5 rounded-full object-cover"
    />
    <span v-else-if="icon" class="flex items-center">
      <slot name="icon"></slot>
    </span>
    
    <span>{{ label }}</span>
    
    <button
      v-if="removable"
      type="button"
      class="ml-1 hover:opacity-70 transition-opacity"
      @click="handleRemove"
      aria-label="Remove"
    >
      <slot name="remove-icon">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </slot>
    </button>
  </div>
</template>
