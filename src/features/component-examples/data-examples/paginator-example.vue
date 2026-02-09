<script setup lang="ts">
import { ref } from 'vue';

import { Paginator, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const first = ref<number>(0);
const rows = ref<number>(10);
const totalRecords = ref<number>(120);
const codeSnippet = ref(`
  <Button label="primary" />
  <Button label="secondary" color="secondary" />
  <Button label="success" color="success" />
  <Button label="danger" color="danger" />
  `);

interface PageEvent {
  page: number;
  first: number;
  rows: number;
  pageCount: number;
}

const onPage = (event: PageEvent) => {
  first.value = event.first;
  // Fetch new data based on event.page
  console.log('Current page:', event.page);
};
</script>

<template>
  <ShowcaseSection title="Button Colors">
    <template #examples>
      <Paginator :totalRecords="totalRecords" :rows="rows" :first="first" :pageLinkSize="5" @page="onPage" />
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" class="rounded-none" />
    </template>
  </ShowcaseSection>
</template>
