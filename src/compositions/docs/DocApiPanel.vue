<script setup lang="ts">
// import { ref } from 'vue';

import { type DataTableColumn, DataTable } from '@/blocks';

interface ApiProps {
  name: string;
  type: string;
  default: string;
  description: string;
}

defineProps<{
  columns: DataTableColumn[];
  data: ApiProps[];
}>();

const onRowClick = () => {
  console.log('clicked');
};
</script>

<template>
  <div class="flex flex-row w-full">
    <div class="flex flex-1 flex-col pt-5 gap-8">
      <DataTable :data="data" :columns="columns" @rowClick="onRowClick" />
    </div>

    <div class="w-1/4 bg-surface shrink-0">
      <slot name="quick-nav" />
    </div>
  </div>
</template>
