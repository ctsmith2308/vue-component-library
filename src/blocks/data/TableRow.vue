<script setup lang="ts" generic="T extends Record<string, any>">
import { computed } from 'vue';

import type { Column } from './types';

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
  'table-row',
  {
    'table-row--hoverable': props.hoverable,
  },
]);

const onRowClick = () => {
  emit('rowClick', props.row);
};
</script>

<template>
  <tr :class="rowClasses" @click="onRowClick">
    <td v-for="column in columns" :key="column.field" class="table-cell">
      <slot :name="`cell-${column.field}`" :data="row" :value="row[column.field]">
        {{ row[column.field] }}
      </slot>
    </td>
  </tr>
</template>
