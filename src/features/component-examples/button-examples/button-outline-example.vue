<script setup lang="ts">
import { ref } from 'vue';
import { Button, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
  <Button label="primary" variant="outlined" />
  <Button label="secondary" color="secondary" variant="outlined" />
  <Button label="success" color="success" variant="outlined" />
  <Button label="danger" color="danger" variant="outlined" />
  `);
</script>

<template>
  <!-- Button Defaults -->
  <ShowcaseSection title="Button Oultined">
    <template #examples>
      <Button label="primary" variant="outlined" />

      <Button label="secondary" color="secondary" variant="outlined" />

      <Button label="success" color="success" variant="outlined" />

      <Button label="danger" color="danger" variant="outlined" />
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
