<script setup lang="ts">
import { computed } from 'vue';

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
  let end = Math.min(pageCount.value - 1, start + props.pageLinkSize - 1);
  
  if (end - start < props.pageLinkSize - 1) {
    start = Math.max(0, end - props.pageLinkSize + 1);
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  
  return pages;
});

const changePage = (page: number) => {
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

const firstPage = () => changePage(0);
const lastPage = () => changePage(pageCount.value - 1);
const prevPage = () => changePage(currentPage.value - 1);
const nextPage = () => changePage(currentPage.value + 1);
</script>

<template>
  <nav class="paginator flex items-center justify-between gap-2 bg-surface p-3 rounded-lg border border-surface-border flex-wrap">
    <!-- Info -->
    <div class="text-sm text-content-text-secondary">
      <slot name="start">
        Showing {{ first + 1 }} to {{ Math.min(first + rows, totalRecords) }} of {{ totalRecords }}
      </slot>
    </div>

    <!-- Page Controls -->
    <div class="flex items-center gap-1">
      <!-- First -->
      <button
        type="button"
        :class="[
          'p-2 rounded hover:bg-surface-alt transition-colors',
          { 'opacity-50 cursor-not-allowed': isFirstPage }
        ]"
        :disabled="isFirstPage"
        @click="firstPage"
        aria-label="First page"
      >
        <slot name="first-icon">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
        </slot>
      </button>

      <!-- Previous -->
      <button
        type="button"
        :class="[
          'p-2 rounded hover:bg-surface-alt transition-colors',
          { 'opacity-50 cursor-not-allowed': isFirstPage }
        ]"
        :disabled="isFirstPage"
        @click="prevPage"
        aria-label="Previous page"
      >
        <slot name="prev-icon">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </slot>
      </button>

      <!-- Page Numbers -->
      <button
        v-for="page in visiblePages"
        :key="page"
        type="button"
        :class="[
          'px-3 py-1 rounded text-sm transition-colors min-w-[2rem]',
          {
            'bg-brand text-white': currentPage === page,
            'hover:bg-surface-alt': currentPage !== page,
          }
        ]"
        @click="changePage(page)"
      >
        {{ page + 1 }}
      </button>

      <!-- Next -->
      <button
        type="button"
        :class="[
          'p-2 rounded hover:bg-surface-alt transition-colors',
          { 'opacity-50 cursor-not-allowed': isLastPage }
        ]"
        :disabled="isLastPage"
        @click="nextPage"
        aria-label="Next page"
      >
        <slot name="next-icon">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </slot>
      </button>

      <!-- Last -->
      <button
        type="button"
        :class="[
          'p-2 rounded hover:bg-surface-alt transition-colors',
          { 'opacity-50 cursor-not-allowed': isLastPage }
        ]"
        :disabled="isLastPage"
        @click="lastPage"
        aria-label="Last page"
      >
        <slot name="last-icon">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
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
