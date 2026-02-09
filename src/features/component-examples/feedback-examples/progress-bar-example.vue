Progress bar with determinate and indeterminate modes. ```vue
<script setup lang="ts">
import { ref } from 'vue';

import { ProgressBar, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const progress = ref<number>(60);

const codeSnippet = ref(`
   <!-- Determinate -->
    <ProgressBar :value="progress" :showValue="true" color="primary" />

    <!-- Indeterminate -->
    <ProgressBar mode="indeterminate" color="success" height="0.5rem" />
  `);
</script>

<template>
  <ShowcaseSection title="Progress Bar">
    <template #examples>
      <!-- Determinate -->
      <ProgressBar :value="progress" :showValue="true" color="primary" />

      <!-- Indeterminate -->
      <ProgressBar mode="indeterminate" color="success" height="0.5rem" />
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
