<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

interface CarouselProps {
  value: any[];
  numVisible?: number;
  numScroll?: number;
  circular?: boolean;
  autoplayInterval?: number;
  showIndicators?: boolean;
  showNavigators?: boolean;
}

const props = withDefaults(defineProps<CarouselProps>(), {
  numVisible: 1,
  numScroll: 1,
  circular: false,
  autoplayInterval: 0,
  showIndicators: true,
  showNavigators: true,
});

const emit = defineEmits<{
  page: [index: number];
}>();

const currentIndex = ref(0);
let autoplayTimer: NodeJS.Timeout | null = null;

const totalPages = computed(() => 
  Math.ceil(props.value.length / props.numScroll)
);

const canGoNext = computed(() => 
  props.circular || currentIndex.value < props.value.length - props.numVisible
);

const canGoPrev = computed(() => 
  props.circular || currentIndex.value > 0
);

const translateX = computed(() => {
  const itemWidth = 100 / props.numVisible;
  return -(currentIndex.value * itemWidth);
});

const next = () => {
  if (canGoNext.value) {
    if (currentIndex.value >= props.value.length - props.numVisible && props.circular) {
      currentIndex.value = 0;
    } else {
      currentIndex.value = Math.min(
        currentIndex.value + props.numScroll,
        props.value.length - props.numVisible
      );
    }
    emit('page', currentIndex.value);
  }
};

const prev = () => {
  if (canGoPrev.value) {
    if (currentIndex.value === 0 && props.circular) {
      currentIndex.value = props.value.length - props.numVisible;
    } else {
      currentIndex.value = Math.max(currentIndex.value - props.numScroll, 0);
    }
    emit('page', currentIndex.value);
  }
};

const goToPage = (pageIndex: number) => {
  currentIndex.value = pageIndex * props.numScroll;
  emit('page', currentIndex.value);
};

const startAutoplay = () => {
  if (props.autoplayInterval > 0) {
    autoplayTimer = setInterval(() => {
      next();
    }, props.autoplayInterval);
  }
};

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<template>
  <div 
    class="carousel relative w-full overflow-hidden bg-surface rounded-lg"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <!-- Previous Button -->
    <button
      v-if="showNavigators && canGoPrev"
      type="button"
      class="carousel-nav carousel-nav-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all"
      @click="prev"
      aria-label="Previous"
    >
      <slot name="prev-icon">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </slot>
    </button>

    <!-- Carousel Items -->
    <div class="carousel-container overflow-hidden">
      <div 
        class="carousel-items flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(${translateX}%)` }"
      >
        <div
          v-for="(item, index) in value"
          :key="index"
          class="carousel-item flex-shrink-0 px-2"
          :style="{ width: `${100 / numVisible}%` }"
        >
          <slot name="item" :data="item" :index="index">
            <div class="aspect-video bg-surface-alt rounded flex items-center justify-center">
              <span class="text-content-text-secondary">Item {{ index + 1 }}</span>
            </div>
          </slot>
        </div>
      </div>
    </div>

    <!-- Next Button -->
    <button
      v-if="showNavigators && canGoNext"
      type="button"
      class="carousel-nav carousel-nav-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all"
      @click="next"
      aria-label="Next"
    >
      <slot name="next-icon">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
      </slot>
    </button>

    <!-- Indicators -->
    <div
      v-if="showIndicators"
      class="carousel-indicators flex justify-center gap-2 py-4"
    >
      <button
        v-for="page in totalPages"
        :key="page"
        type="button"
        :class="[
          'w-2 h-2 rounded-full transition-all',
          {
            'bg-brand w-6': Math.floor(currentIndex / numScroll) === page - 1,
            'bg-gray-300 hover:bg-gray-400': Math.floor(currentIndex / numScroll) !== page - 1,
          }
        ]"
        @click="goToPage(page - 1)"
        :aria-label="`Go to page ${page}`"
      ></button>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 640px) {
  .carousel-nav {
    width: 2rem;
    height: 2rem;
    padding: 0.25rem;
  }
  
  .carousel-nav svg {
    width: 1.25rem;
    height: 1.25rem;
  }
}
</style>
