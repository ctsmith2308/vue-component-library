<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  clickable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
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
