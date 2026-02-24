<script setup lang="ts">
import { ref, computed } from 'vue';

interface ImageProps {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  preview?: boolean;
  imageClass?: string;
  imageStyle?: string;
  fit?: 'cover' | 'contain' | 'fill';
}

const props = withDefaults(defineProps<ImageProps>(), {
  alt: '',
  preview: false,
  imageClass: '',
  imageStyle: '',
  fit: 'cover',
});

const showPreview = ref(false);
const isLoading = ref(true);
const hasError = ref(false);

const openPreview = () => {
  if (props.preview) {
    showPreview.value = true;
    document.body.style.overflow = 'hidden';
  }
};

const handleLoad = () => {
  isLoading.value = false;
};

const handleError = () => {
  isLoading.value = false;
  hasError.value = true;
};

const containerStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
}));

const fitClass = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
};
</script>

<template>
  <div class="relative inline-block w-full" :style="containerStyle">
    <div v-if="isLoading" class="absolute inset-0 bg-surface-alt animate-pulse rounded-lg" />

    <div v-if="hasError" class="absolute inset-0 bg-surface-alt rounded-lg flex items-center justify-center">
      <slot name="error">
        <span class="text-content-text-secondary text-sm">Failed to load image</span>
      </slot>
    </div>

    <img
      v-show="!isLoading && !hasError"
      :src="src"
      :alt="alt"
      :class="[
        'w-full h-full rounded-lg',
        fitClass[fit],
        imageClass,
        { 'cursor-pointer hover:opacity-90 transition-opacity': preview },
      ]"
      :style="imageStyle"
      @load="handleLoad"
      @error="handleError"
      @click="openPreview"
    />
  </div>
</template>
