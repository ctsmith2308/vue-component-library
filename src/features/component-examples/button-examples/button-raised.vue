<script setup lang="ts">
import { ref } from 'vue';
import { Button, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
  <Button label="primary" raised />
  <Button label="secondary" color="secondary" raised />
  <Button label="success" color="success" raised />
  <Button label="danger" color="danger" raised />
  `);
</script>

<template>
  <ShowcaseSection title="Button Raised">
    <template #examples>
      <Button label="primary" raised />

      <Button label="secondary" color="secondary" raised />

      <Button label="success" color="success" raised />

      <Button label="danger" color="danger" raised />
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
