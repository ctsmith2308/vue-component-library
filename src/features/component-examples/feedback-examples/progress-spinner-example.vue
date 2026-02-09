<script setup lang="ts">
import { ref } from 'vue';

import { ProgressSpinner, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
  <Button label="primary" />
  <Button label="secondary" color="secondary" />
  <Button label="success" color="success" />
  <Button label="danger" color="danger" />
  `);
</script>

<template>
  <ShowcaseSection title="Progress Spinner">
    <template #examples>
      <ProgressSpinner size="lg" color="primary" />
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
