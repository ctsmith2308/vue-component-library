<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Button from '../button/Button.vue';
import Icon from '../icon/Icon.vue';

interface CarouselProps {
  value: unknown[];
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
let autoplayTimer: ReturnType<typeof setInterval> | null = null;

const totalPages = computed(() => Math.ceil(props.value.length / props.numScroll));

const canGoNext = computed(() => props.circular || currentIndex.value < props.value.length - props.numVisible);

const canGoPrev = computed(() => props.circular || currentIndex.value > 0);

const translateX = computed(() => {
  const itemWidth = 100 / props.numVisible;
  return -(currentIndex.value * itemWidth);
});

const next = () => {
  if (canGoNext.value) {
    if (currentIndex.value >= props.value.length - props.numVisible && props.circular) {
      currentIndex.value = 0;
    } else {
      currentIndex.value = Math.min(currentIndex.value + props.numScroll, props.value.length - props.numVisible);
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
  <div class="relative w-full overflow-hidden bg-surface rounded-lg" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
    <!-- Previous Button -->
    <Button
      v-if="showNavigators && canGoPrev"
      variant="outlined"
      class="absolute left-2 top-1/2 -translate-y-1/2 z-10 transition-all"
      @click="prev"
      aria-label="Previous"
      raised
    >
      <template #icon>
        <Icon iconType="ChevronLeftIcon" />
      </template>
    </Button>

    <!-- Carousel Items -->
    <div class="overflow-hidden">
      <div class="flex transition-transform duration-300 ease-in-out" :style="{ transform: `translateX(${translateX}%)` }">
        <div
          v-for="(item, index) in value"
          :key="index"
          class="flex-shrink-0 px-2"
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

    <!-- Next Button-->
    <Button
      v-if="showNavigators && canGoNext"
      variant="outlined"
      class="absolute right-2 top-1/2 -translate-y-1/2 z-10 transition-all"
      @click="next"
      aria-label="Next"
      raised
    >
      <template #icon>
        <Icon iconType="ChevronRightIcon" />
      </template>
    </Button>

    <!-- Indicators -->
    <div v-if="showIndicators" class="flex justify-center gap-2 py-4">
      <button
        v-for="page in totalPages"
        :key="page"
        type="button"
        :class="[
          'w-2 h-2 rounded-full transition-all',
          {
            'bg-brand w-6': Math.floor(currentIndex / numScroll) === page - 1,
            'bg-surface-border hover:bg-surface-alt': Math.floor(currentIndex / numScroll) !== page - 1,
          },
        ]"
        @click="goToPage(page - 1)"
        :aria-label="`Go to page ${page}`"
      ></button>
    </div>
  </div>
</template>
