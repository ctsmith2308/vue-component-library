<script setup lang="ts">
import { computed } from 'vue';

import type { TableHeaderCellProps } from './types';

import Icon from '../icon/Icon.vue';

const props = defineProps<TableHeaderCellProps>();

const emit = defineEmits<{
  sort: [field: string];
}>();

const isActive = computed(() => props.sortField === props.column.field);

const isSortable = computed(() => props.column.sortable);

const headerClasses = computed(() => [
  'table-header-cell',
  {
    'table-header-cell--sortable': isSortable.value,
  },
]);

const onHeaderClick = () => {
  if (isSortable.value) {
    emit('sort', props.column.field);
  }
};
</script>

<template>
  <th :class="headerClasses" :style="column.width ? { width: column.width } : undefined" @click="onHeaderClick">
    <div class="flex items-center gap-2">
      <span>{{ column.header }}</span>

      <span v-if="isSortable" class="sort-icon text-content-text-secondary">
        <slot name="sort-icon" :field="column.field" :active="isActive" :order="sortOrder">
          <Icon iconType="ArrowLongUpIcon" v-if="isActive && sortOrder === 'asc'" />

          <Icon iconType="ArrowLongDownIcon" v-else-if="isActive && sortOrder === 'desc'" />

          <div v-else class="w-4 h-4 opacity-30">
            <Icon iconType="ArrowLongUpIcon" />
          </div>
        </slot>
      </span>
    </div>
  </th>
</template>
