<script setup lang="ts">
import { ref } from 'vue';
import { DataTable, Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Loading State';

const description = `Set loading to true to display a skeleton loader while data is being fetched.`;

const htmlString = toHtmlHighlight(description, 'loading');

const codeSnippet = `
  <DataTable :data="rows" :columns="columns" :loading="isLoading" />

`;

const isLoading = ref(true);

interface Row {
  name: string;
  email: string;
}

const columns = [
  { field: 'name', header: 'Name' },
  { field: 'email', header: 'Email' },
];

const rows: Row[] = [];

const toggleLoading = () => {
  isLoading.value = !isLoading.value;
};
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full flex flex-col gap-4">
      <Button :label="isLoading ? 'Stop Loading' : 'Start Loading'" @click="toggleLoading" />
      <DataTable :data="rows" :columns="columns" :loading="isLoading" :rows="3" />
    </div>
  </DocumentExampleSection>
</template>
