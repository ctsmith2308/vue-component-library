<script setup lang="ts">
import { computed } from 'vue';
import type { ListItemProps } from './types';

const props = withDefaults(defineProps<ListItemProps>(), {
  clickable: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const handleClick = (event: MouseEvent) => {
  if (props.clickable) {
    emit('click', event);
  }
};

const classes = computed(() => [
  {
    'cursor-pointer hover:bg-surface-alt': props.clickable,
  },
]);
</script>

<template>
  <li :class="classes" @click.stop="handleClick">
    <slot />
  </li>
</template>
