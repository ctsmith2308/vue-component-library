<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/buttons';
import { DocumentPanel } from '@/components/panels';

const codeSnippet = ref(`
  <Button label="primary" variant="text" />
  <Button label="secondary" color="secondary" variant="text" />
  <Button label="success" color="success" variant="text" />
  <Button label="danger" color="danger" variant="text" />
  `);
</script>

<template>
  <!-- Button Defaults -->
  <DocumentPanel header="Button as Text" :code-snippet="codeSnippet">
    <Button label="primary" variant="text" />

    <Button label="secondary" color="secondary" variant="text" />

    <Button label="success" color="success" variant="text" />

    <Button label="danger" color="danger" variant="text" />
  </DocumentPanel>
</template>
