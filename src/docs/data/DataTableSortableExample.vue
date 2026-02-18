<script setup lang="ts">
import { DataTable } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Sortable Columns';

const description = `Add sortable: true to any column definition to enable client-side sorting.`;

const htmlString = toHtmlHighlight(description, 'sortable');

const codeSnippet = `
  <DataTable :data="rows" :columns="columns" />

`;

interface Product {
  name: string;
  category: string;
  price: number;
  stock: number;
}

const columns = [
  { field: 'name', header: 'Name', sortable: true },
  { field: 'category', header: 'Category', sortable: true },
  { field: 'price', header: 'Price', sortable: true },
  { field: 'stock', header: 'Stock', sortable: true },
];

const rows: Product[] = [
  { name: 'Widget A', category: 'Electronics', price: 29.99, stock: 142 },
  { name: 'Widget B', category: 'Tools', price: 14.5, stock: 58 },
  { name: 'Gadget X', category: 'Electronics', price: 99.0, stock: 23 },
  { name: 'Tool Pro', category: 'Tools', price: 49.99, stock: 77 },
  { name: 'Gadget Y', category: 'Accessories', price: 9.99, stock: 300 },
];
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full">
      <DataTable :data="rows" :columns="columns" />
    </div>
  </DocumentExampleSection>
</template>
