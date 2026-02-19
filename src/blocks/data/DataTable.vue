<script setup lang="ts" generic="T extends Record<string, any>">
import { ref, computed } from 'vue';
import type { Column } from './types';
import TableHeaderCell from './TableHeaderCell.vue';
import TableRow from './TableRow.vue';
import TableSkeleton from './TableSkeleton.vue';
import Paginator from './Paginator.vue';

interface DataTableProps<T> {
  data: T[];
  columns: Column[];
  hoverable?: boolean;
  bordered?: boolean;
  loading?: boolean;
  emptyMessage?: string;
  paginated?: boolean;
  rows?: number;
  totalRecords?: number;
}

const props = withDefaults(defineProps<DataTableProps<T>>(), {
  hoverable: true,
  bordered: false,
  loading: false,
  emptyMessage: 'No data available',
  paginated: false,
  rows: 10,
});

const emit = defineEmits<{
  rowClick: [row: T];
  rowSelect: [row: T];
  page: [event: { page: number; first: number; rows: number; pageCount: number }];
}>();

const sortField = ref<string | null>(null);
const sortOrder = ref<'asc' | 'desc'>('asc');
const first = ref<number>(0);

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

const paginatedData = computed(() => {
  if (!props.paginated) return sortedData.value;

  const start = first.value;
  const end = start + props.rows;
  return sortedData.value.slice(start, end);
});

const totalRecordsCount = computed(() => {
  return props.totalRecords ?? props.data.length;
});

const tableClasses = computed(() => ['w-full overflow-x-auto  bg-surface rounded-lg border border-surface-border']);

const onSort = (field: string) => {
  if (sortField.value === field) {
    // Toggle order if same field
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    // Set new field with ascending order
    sortField.value = field;
    sortOrder.value = 'asc';
  }
};

const onRowClick = (row: T) => {
  emit('rowClick', row);
};

const onPageChange = (event: { page: number; first: number; rows: number; pageCount: number }) => {
  first.value = event.first;
  emit('page', event);
};
</script>

<template>
  <div class="datatable-wrapper w-full space-y-4">
    <div :class="tableClasses">
      <table class="w-full">
        <thead class="bg-panel-bg-alt border-b border-panel-border">
          <tr>
            <TableHeaderCell
              v-for="column in columns"
              :key="column.field"
              :column="column"
              :sort-field="sortField"
              :sort-order="sortOrder"
              @sort="onSort"
            >
              <template #sort-icon="{ field, active, order }">
                <slot name="sort-icon" :field="field" :active="active" :order="order" />
              </template>
            </TableHeaderCell>
          </tr>
        </thead>

        <TableSkeleton v-if="loading" :rows="rows" :columns="columns.length" />

        <tbody v-else-if="paginatedData.length > 0">
          <TableRow
            v-for="(row, index) in paginatedData"
            :key="index"
            :row="row"
            :columns="columns"
            :index="index"
            :hoverable="hoverable"
            @row-click="onRowClick"
          >
            <template v-for="column in columns" #[`cell-${column.field}`]="{ data, value }">
              <slot :name="`cell-${column.field}`" :data="data" :value="value">
                {{ value }}
              </slot>
            </template>
          </TableRow>
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

    <Paginator
      v-if="paginated && !loading && paginatedData.length > 0"
      :total-records="totalRecordsCount"
      :rows="rows"
      :first="first"
      @page="onPageChange"
    />
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

  th,
  td {
    padding: 0.5rem !important;
  }
}
</style>
