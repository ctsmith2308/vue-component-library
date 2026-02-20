<script setup lang="ts">
import { computed } from 'vue';

interface AvatarProps {
  image?: string;
  label?: string;
  icon?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
}

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'md',
  shape: 'circle',
  icon: false,
});

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-lg',
};

const shapeClass = computed(() => (props.shape === 'circle' ? 'rounded-full' : 'rounded-lg'));

const avatarClasses = computed(() => [
  'inline-flex items-center justify-center overflow-hidden',
  sizeClasses[props.size],
  shapeClass.value,
  { 'bg-brand text-white': !props.image },
]);

const initials = computed(() => {
  if (!props.label) return '';

  const names = props.label.split(' ');

  if (names.length >= 2) {
    return `${names[0][0]}${names[1][0]}`.toUpperCase();
  }

  return props.label.substring(0, 2).toUpperCase();
});
</script>

<template>
  <div :class="avatarClasses">
    <img v-if="image" :src="image" :alt="label || 'Avatar'" class="w-full h-full object-cover" />
    <span v-else-if="icon" class="flex items-center justify-center">
      <slot name="icon"></slot>
    </span>

    <span v-else class="font-medium">
      {{ initials }}
    </span>
  </div>
</template>
