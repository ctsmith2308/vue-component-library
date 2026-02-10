<script setup lang="ts">
import { computed } from 'vue';

import { ChevronDoubleRight, ChevronDoubleLeft, ChevronRightIcon, ChevronLeftIcon } from '../icons';

interface PaginatorProps {
  totalRecords: number;
  rows?: number;
  first?: number;
  pageLinkSize?: number;
}

const props = withDefaults(defineProps<PaginatorProps>(), {
  rows: 10,
  first: 0,
  pageLinkSize: 5,
});

const emit = defineEmits<{
  page: [event: { page: number; first: number; rows: number; pageCount: number }];
}>();

const pageCount = computed(() => Math.ceil(props.totalRecords / props.rows));

const currentPage = computed(() => Math.floor(props.first / props.rows));

const isFirstPage = computed(() => currentPage.value === 0);

const isLastPage = computed(() => currentPage.value === pageCount.value - 1);

const visiblePages = computed(() => {
  const pages: number[] = [];
  const half = Math.floor(props.pageLinkSize / 2);

  let start = Math.max(0, currentPage.value - half);
  const end = Math.min(pageCount.value - 1, start + props.pageLinkSize - 1);

  if (end - start < props.pageLinkSize - 1) {
    start = Math.max(0, end - props.pageLinkSize + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});

const buttonClasses = computed(() => (isDisabled: boolean) => [
  'p-2 rounded hover:bg-surface-alt transition-colors',
  { 'opacity-50 cursor-not-allowed': isDisabled },
]);

const pageButtonClasses = computed(() => (page: number) => [
  'px-3 py-1 rounded text-sm transition-colors min-w-[2rem]',
  {
    'bg-brand text-white': currentPage.value === page,
    'hover:bg-surface-alt': currentPage.value !== page,
  },
]);

const onPageChange = (page: number) => {
  if (page >= 0 && page < pageCount.value) {
    const first = page * props.rows;
    emit('page', {
      page,
      first,
      rows: props.rows,
      pageCount: pageCount.value,
    });
  }
};

const onFirstPage = () => onPageChange(0);
const onLastPage = () => onPageChange(pageCount.value - 1);
const onPrevPage = () => onPageChange(currentPage.value - 1);
const onNextPage = () => onPageChange(currentPage.value + 1);
</script>

<template>
  <nav
    class="paginator flex items-center justify-between gap-2 bg-surface p-3 rounded-lg border border-surface-border flex-wrap"
  >
    <!-- Info -->
    <div class="text-sm text-content-text-secondary">
      <slot name="start"> Showing {{ first + 1 }} to {{ Math.min(first + rows, totalRecords) }} of {{ totalRecords }} </slot>
    </div>

    <!-- Page Controls -->
    <div class="flex items-center gap-1">
      <!-- First -->
      <button
        type="button"
        :class="buttonClasses(isFirstPage)"
        :disabled="isFirstPage"
        @click="onFirstPage"
        aria-label="First page"
      >
        <slot name="first-icon">
          <ChevronDoubleLeft />
        </slot>
      </button>

      <!-- Previous -->
      <button
        type="button"
        :class="buttonClasses(isFirstPage)"
        :disabled="isFirstPage"
        @click="onPrevPage"
        aria-label="Previous page"
      >
        <slot name="prev-icon">
          <ChevronLeftIcon />
        </slot>
      </button>

      <!-- Page Numbers -->
      <button
        v-for="page in visiblePages"
        :key="page"
        type="button"
        :class="pageButtonClasses(page)"
        @click="onPageChange(page)"
      >
        {{ page + 1 }}
      </button>

      <!-- Next -->
      <button
        type="button"
        :class="buttonClasses(isLastPage)"
        :disabled="isLastPage"
        @click="onNextPage"
        aria-label="Next page"
      >
        <slot name="next-icon">
          <ChevronRightIcon />
        </slot>
      </button>

      <!-- Last -->
      <button
        type="button"
        :class="buttonClasses(isLastPage)"
        :disabled="isLastPage"
        @click="onLastPage"
        aria-label="Last page"
      >
        <slot name="last-icon">
          <ChevronDoubleRight />
        </slot>
      </button>
    </div>
  </nav>
</template>

<style scoped>
@media (max-width: 640px) {
  .paginator {
    font-size: 0.875rem;
    padding: 0.5rem;
  }
}
</style>
