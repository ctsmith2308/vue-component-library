<script setup lang="ts" generic="T extends Record<string, any>">
import { ref, computed } from 'vue';

interface Column {
  field: string;
  header: string;
  sortable?: boolean;
  width?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column[];
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  loading?: boolean;
  emptyMessage?: string;
}

const props = withDefaults(defineProps<DataTableProps<T>>(), {
  striped: false,
  hoverable: true,
  bordered: false,
  loading: false,
  emptyMessage: 'No data available',
});

const emit = defineEmits<{
  rowClick: [row: T];
  rowSelect: [row: T];
}>();

const sortField = ref<string | null>(null);
const sortOrder = ref<'asc' | 'desc'>('asc');

const sortedData = computed(() => {
  if (!sortField.value) return props.data;

  return [...props.data].sort((a, b) => {
    const aVal = a[sortField.value!];
    const bVal = b[sortField.value!];

    if (aVal === bVal) return 0;

    const comparison = aVal < bVal ? -1 : 1;
    return sortOrder.value === 'asc' ? comparison : -comparison;
  });
});

const handleSort = (field: string, sortable?: boolean) => {
  if (!sortable) return;

  if (sortField.value === field) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortField.value = field;
    sortOrder.value = 'asc';
  }
};

const handleRowClick = (row: T) => {
  emit('rowClick', row);
};
</script>

<template>
  <div class="datatable-wrapper w-full">
    <div class="datatable-container overflow-x-auto bg-surface rounded-lg border border-surface-border">
      <table class="w-full">
        <thead class="bg-surface-alt border-b border-surface-border">
          <tr>
            <th
              v-for="column in columns"
              :key="column.field"
              :style="{ width: column.width }"
              :class="[
                'px-4 py-3 text-left text-sm font-semibold text-content-text',
                { 'cursor-pointer hover:bg-gray-100 select-none': column.sortable }
              ]"
              @click="handleSort(column.field, column.sortable)"
            >
              <div class="flex items-center gap-2">
                <span>{{ column.header }}</span>
                <span
                  v-if="column.sortable"
                  class="sort-icon text-content-text-secondary"
                >
                  <slot name="sort-icon" :field="column.field" :active="sortField === column.field" :order="sortOrder">
                    <svg
                      v-if="sortField !== column.field"
                      class="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 12l5 5 5-5H5zm10-4l-5-5-5 5h10z" />
                    </svg>
                    <svg
                      v-else-if="sortOrder === 'asc'"
                      class="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 12l5 5 5-5H5z" />
                    </svg>
                    <svg
                      v-else
                      class="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M15 8l-5-5-5 5h10z" />
                    </svg>
                  </slot>
                </span>
              </div>
            </th>
          </tr>
        </thead>

        <tbody v-if="!loading && sortedData.length > 0">
          <tr
            v-for="(row, index) in sortedData"
            :key="index"
            :class="[
              'border-b border-surface-border last:border-b-0',
              {
                'bg-surface-alt': striped && index % 2 === 1,
                'hover:bg-gray-50 cursor-pointer': hoverable,
              }
            ]"
            @click="handleRowClick(row)"
          >
            <td
              v-for="column in columns"
              :key="column.field"
              class="px-4 py-3 text-sm text-content-text"
            >
              <slot :name="`cell-${column.field}`" :data="row" :value="row[column.field]">
                {{ row[column.field] }}
              </slot>
            </td>
          </tr>
        </tbody>

        <tbody v-else-if="loading">
          <tr>
            <td :colspan="columns.length" class="px-4 py-8 text-center">
              <slot name="loading">
                <div class="flex items-center justify-center gap-2 text-content-text-secondary">
                  <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-brand"></div>
                  <span>Loading...</span>
                </div>
              </slot>
            </td>
          </tr>
        </tbody>

        <tbody v-else>
          <tr>
            <td :colspan="columns.length" class="px-4 py-8 text-center text-content-text-secondary">
              <slot name="empty">
                {{ emptyMessage }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.datatable-container {
  min-width: 100%;
}

@media (max-width: 640px) {
  .datatable-container {
    font-size: 0.875rem;
  }
  
  th, td {
    padding: 0.5rem !important;
  }
}
</style>
