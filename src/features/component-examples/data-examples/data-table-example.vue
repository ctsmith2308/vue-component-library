<script setup lang="ts">
import { ref } from 'vue';
import { DataTable, ShowcaseSection } from '@/shared/ui';
import type { DataTableColumn } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
  <DataTable :data="products" :columns="columns" :striped="true" :hoverable="true" @rowClick="handleRowClick">
      <template #cell-price="{ value }"> \${{ value }}\ </template>
    </DataTable>
  `);

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const products = ref<Product[]>([
  { id: 1, name: 'Product 1', price: 100, category: 'Electronics' },
  { id: 2, name: 'Product 2', price: 200, category: 'Clothing' },
]);

const columns: DataTableColumn[] = [
  { field: 'name', header: 'Name', sortable: true },
  { field: 'price', header: 'Price', sortable: true },
  { field: 'category', header: 'Category' },
];

const handleRowClick = (row: Product) => {
  console.log('Row clicked:', row);
};
</script>

<template>
  <ShowcaseSection title="Data Table">
    <template #examples>
      <DataTable :data="products" :columns="columns" :striped="true" :hoverable="true" @rowClick="handleRowClick">
        <template #cell-price="{ value }"> ${{ value }} </template>
      </DataTable>
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" class="rounded-none" />
    </template>
  </ShowcaseSection>
</template>
