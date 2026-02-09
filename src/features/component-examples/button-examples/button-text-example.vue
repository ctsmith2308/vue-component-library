<script setup lang="ts">
import { ref } from 'vue';
import { Button, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
  <Button label="primary" variant="text" />
  <Button label="secondary" color="secondary" variant="text" />
  <Button label="success" color="success" variant="text" />
  <Button label="danger" color="danger" variant="text" />
  `);
</script>

<template>
  <!-- Button Defaults -->
  <ShowcaseSection title="Button as Text">
    <template #examples>
      <Button label="primary" variant="text" />

      <Button label="secondary" color="secondary" variant="text" />

      <Button label="success" color="success" variant="text" />

      <Button label="danger" color="danger" variant="text" />
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
