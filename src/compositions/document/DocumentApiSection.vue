<script setup lang="ts">
import { Heading, DataTable } from '@/blocks';

interface ApiSectionProps {
  heading?: string;
  description: string;
  apiTableData: {
    data: Array<{ name: string; type: string; default: string; description: string }>;
    columns: Array<{ field: string; header: string }>;
  };
}

withDefaults(defineProps<ApiSectionProps>(), {
  heading: 'Api Reference',
});

const onRowClick = () => {
  console.log('clicked');
};
</script>

<template>
  <section class="flex flex-1 flex-col gap-5 bg-page">
    <Heading :size="3">
      {{ heading }}
    </Heading>

    <div class="text-content-text-secondary leading-relaxed" v-html="description" />

    <DataTable :data="apiTableData.data" :columns="apiTableData.columns" @rowClick="onRowClick" />
  </section>
</template>
