<script setup lang="ts">
import {
  Heading,
  Text,
  // DataTable
} from '@/blocks';

interface ApiSectionProps {
  heading?: string;
  apiTableData: {
    data: Array<{ prop: string; type: string; default: string }>;
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
  <section class="flex flex-1 flex-col gap-5">
    <Heading :size="3">
      {{ heading }}
    </Heading>

    <Text>
      <slot name="description" />
    </Text>

    <DataTable :data="apiTableData.data" :columns="apiTableData.columns" @rowClick="onRowClick" />
  </section>
</template>
