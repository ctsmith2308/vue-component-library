<script setup lang="ts">
import { ref } from 'vue';

import Paginator from '@/blocks/data/Paginator.vue';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Basic Paginator';

const description = `Provide totalRecords and rows to drive the paginator. Listen to the page event for navigation changes.`;

const htmlString = toHtmlHighlight(description, 'totalRecords');

const codeSnippet = `<Paginator
  :total-records="100"
  :rows="10"
  :first="first"
  @page="onPage"
/>
`;

const first = ref(0);

const onPage = (event: { page: number; first: number; rows: number; pageCount: number }) => {
  first.value = event.first;
};
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full">
      <Paginator :total-records="100" :rows="10" :first="first" @page="onPage" />
      <p class="mt-3 text-sm text-content-text-secondary text-center">
        Showing records {{ first + 1 }}–{{ first + 10 }} of 100
      </p>
    </div>
  </DocumentExampleSection>
</template>
