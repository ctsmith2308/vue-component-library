<script setup lang="ts">
import { DataTable } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Basic';

const description = `Pass an array of objects to data and define columns with a field key and header label.`;

const htmlString = toHtmlHighlight(description, 'data');

const codeSnippet = `
  <DataTable :data="rows" :columns="columns" />

`;

interface User {
  name: string;
  email: string;
  role: string;
}

const columns = [
  { field: 'name', header: 'Name' },
  { field: 'email', header: 'Email' },
  { field: 'role', header: 'Role' },
];

const rows: User[] = [
  { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
  { name: 'Carol White', email: 'carol@example.com', role: 'Viewer' },
  { name: 'David Brown', email: 'david@example.com', role: 'Editor' },
];
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full">
      <DataTable :data="rows" :columns="columns" />
    </div>
  </DocumentExampleSection>
</template>
