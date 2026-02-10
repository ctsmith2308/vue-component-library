<script setup lang="ts">
import { computed } from 'vue';
import { LongArrowUp } from '@/shared/ui/icons';
import { LongArrowDown } from '@/shared/ui/icons';

interface TableHeaderCellProps {
  column: {
    field: string;
    header: string;
    sortable?: boolean;
    width?: string;
  };
  sortField: string | null;
  sortOrder: 'asc' | 'desc';
}

const props = defineProps<TableHeaderCellProps>();

const emit = defineEmits<{
  sort: [field: string];
}>();

const isActive = computed(() => props.sortField === props.column.field);

const isSortable = computed(() => props.column.sortable);

const headerClasses = computed(() => [
  'px-4 py-3 text-left text-sm font-semibold text-content-text',
  {
    'cursor-pointer hover:bg-gray-100 select-none': isSortable.value,
  },
]);

const onHeaderClick = () => {
  if (isSortable.value) {
    emit('sort', props.column.field);
  }
};
</script>

<template>
  <th :class="headerClasses" :style="{ width: column.width }" @click="onHeaderClick">
    <div class="flex items-center gap-2">
      <span>{{ column.header }}</span>

      <span v-if="isSortable" class="sort-icon text-content-text-secondary">
        <slot name="sort-icon" :field="column.field" :active="isActive" :order="sortOrder">
          <LongArrowUp v-if="isActive && sortOrder === 'asc'" class="w-4 h-4" />
          <LongArrowDown v-else-if="isActive && sortOrder === 'desc'" class="w-4 h-4" />
          <div v-else class="w-4 h-4 opacity-30">
            <LongArrowUp class="w-4 h-4" />
          </div>
        </slot>
      </span>
    </div>
  </th>
</template>
