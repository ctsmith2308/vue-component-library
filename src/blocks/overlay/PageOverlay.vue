<script setup lang="ts">
import type { OverlayProps } from './types';

const props = defineProps<OverlayProps>();

const emit = defineEmits(['close']);

const onClose = () => {
  emit('close');
};
</script>

<template>
  <Transition name="overlay">
    <div v-if="props.isOpen" class="fixed inset-0 z-20 bg-black/50 backdrop-blur-xs" @click="onClose" />
  </Transition>
</template>
