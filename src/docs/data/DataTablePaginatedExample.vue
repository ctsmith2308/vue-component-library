<script setup lang="ts">
import { DataTable } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Paginated DataTable';

const description = `Enable pagination with the paginated prop and control rows per page with rows.`;

const htmlString = toHtmlHighlight(description, 'paginated');

const codeSnippet = `
  <DataTable :data="rows" :columns="columns" :paginated="true" :rows="5" />

`;

interface Employee {
  id: number;
  name: string;
  department: string;
  status: string;
}

const columns = [
  { field: 'id', header: 'ID' },
  { field: 'name', header: 'Name' },
  { field: 'department', header: 'Department' },
  { field: 'status', header: 'Status' },
];

const rows: Employee[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Employee ${i + 1}`,
  department: ['Engineering', 'Marketing', 'Sales', 'Design'][i % 4],
  status: i % 3 === 0 ? 'Inactive' : 'Active',
}));
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full">
      <DataTable :data="rows" :columns="columns" :paginated="true" :rows="5" />
    </div>
  </DocumentExampleSection>
</template>
