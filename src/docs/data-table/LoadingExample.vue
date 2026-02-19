<script setup lang="ts">
import { ref } from 'vue';

import { DataTable, Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Loading State';

const description = `Set loading to true to display the skeleton loader while data is being fetched.`;

const htmlString = toHtmlHighlight(description, 'loading');

const codeSnippet = `<DataTable :data="[]" :columns="columns" :loading="isLoading" :rows="4" />`;

interface Row {
  name: string;
  email: string;
  role: string;
}

const columns = [
  { field: 'name', header: 'Name' },
  { field: 'email', header: 'Email' },
  { field: 'role', header: 'Role' },
];

const rows: Row[] = [];
const isLoading = ref(true);

const toggleLoading = () => {
  isLoading.value = !isLoading.value;
};
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full flex flex-col gap-4">
      <div class="flex justify-start">
        <Button :label="isLoading ? 'Stop Loading' : 'Start Loading'" variant="outlined" @click="toggleLoading" />
      </div>

      <DataTable :data="rows" :columns="columns" :loading="isLoading" :rows="4" />
    </div>
  </DocumentExampleSection>
</template>
