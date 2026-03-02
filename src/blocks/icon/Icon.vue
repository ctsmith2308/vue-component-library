<script setup lang="ts">
import { computed } from 'vue';

import { type IconProps, type IconSize, ICON_COMPONENT_KEYS } from './types';

const props = withDefaults(defineProps<IconProps>(), {
  size: 'md',
});

const sizeKeys: Record<IconSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

const iconComponent = computed(() => ICON_COMPONENT_KEYS[props.iconType]);

const sizeClass = computed(() => sizeKeys[props.size]);
</script>

<template>
  <component :is="iconComponent" :class="['shrink-0 ', sizeClass]" />
</template>
