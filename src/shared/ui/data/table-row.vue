<script setup lang="ts" generic="T extends Record<string, any>">
import { computed } from 'vue';

interface Column {
  field: string;
  header: string;
  sortable?: boolean;
  width?: string;
}

interface TableRowProps<T> {
  row: T;
  columns: Column[];
  index: number;
  hoverable: boolean;
}

const props = defineProps<TableRowProps<T>>();

const emit = defineEmits<{
  rowClick: [row: T];
}>();

const rowClasses = computed(() => [
  'border-b border-surface-border last:border-b-0',
  {
    'hover:bg-gray-50 cursor-pointer': props.hoverable,
  },
]);

const onRowClick = () => {
  emit('rowClick', props.row);
};
</script>

<template>
  <tr :class="rowClasses" @click="onRowClick">
    <td v-for="column in columns" :key="column.field" class="px-4 py-3 text-sm text-content-text">
      <slot :name="`cell-${column.field}`" :data="row" :value="row[column.field]">
        {{ row[column.field] }}
      </slot>
    </td>
  </tr>
</template>
