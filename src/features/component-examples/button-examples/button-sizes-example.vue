<script setup lang="ts">
import { ref } from 'vue';
import { Button, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
  <Button label="small" size="sm" />
  <Button label="medium" size="md" />
  <Button label="large" size="lg" />
  <Button label="x-large" size="xl" />
  <Button label="jumbo" size="jumbo" />
  `);
</script>

<template>
  <!-- Button Sizes -->
  <ShowcaseSection title="Button Sizes">
    <template #examples>
      <Button label="small" size="sm" />

      <Button label="medium" size="md" />

      <Button label="large" size="lg" />

      <Button label="x-large" size="xl" />

      <Button label="jumbo" size="jumbo" />
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
