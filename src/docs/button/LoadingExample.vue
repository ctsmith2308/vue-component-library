<script setup lang="ts">
import { ref } from 'vue';

import { Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Loading';

const description = 'Use the loading property to set the loading status of the button.';

const htmlString = toHtmlHighlight(description, 'loading');

const codeSnippet = `<Button label="click me" :loading="loading" @click="toggleLoading" />`;

const loading = ref(false);

const toggleLoading = () => {
  loading.value = !loading.value;

  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Button label="click me" :loading="loading" @click="toggleLoading" />
  </DocumentExampleSection>
</template>
