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
}

const props = withDefaults(defineProps<ImageProps>(), {
  alt: '',
  preview: false,
  imageClass: '',
  imageStyle: '',
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

const closePreview = () => {
  showPreview.value = false;
  document.body.style.overflow = '';
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
</script>

<template>
  <div class="image-container" :style="containerStyle">
    <div v-if="isLoading" class="image-skeleton bg-surface-alt animate-pulse rounded-lg"></div>
    
    <div v-if="hasError" class="image-error bg-surface-alt rounded-lg flex items-center justify-center">
      <slot name="error">
        <span class="text-content-text-secondary text-sm">Failed to load image</span>
      </slot>
    </div>

    <img
      v-show="!isLoading && !hasError"
      :src="src"
      :alt="alt"
      :class="[
        'image',
        imageClass,
        { 'cursor-pointer hover:opacity-90 transition-opacity': preview }
      ]"
      :style="imageStyle"
      @load="handleLoad"
      @error="handleError"
      @click="openPreview"
    />

    <!-- Preview Modal -->
    <Teleport to="body">
      <div
        v-if="showPreview"
        class="image-preview-overlay fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
        @click="closePreview"
      >
        <button
          class="absolute top-4 right-4 text-white hover:text-gray-300 z-[10000] p-2"
          @click.stop="closePreview"
          aria-label="Close preview"
        >
          <slot name="close-icon">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </slot>
        </button>
        
        <img
          :src="src"
          :alt="alt"
          class="max-w-full max-h-full object-contain"
          @click.stop
        />
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

.image,
.image-skeleton,
.image-error {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}

.image-skeleton,
.image-error {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
