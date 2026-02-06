<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/buttons';
import { DocumentPanel } from '@/components/panels';

const codeSnippet = ref(`
  <Button label="primary" />
  <Button label="secondary" color="secondary" />
  <Button label="success" color="success" />
  <Button label="danger" color="danger" />
  `);
</script>

<template>
  <DocumentPanel header="Button Colors" :code-snippet="codeSnippet">
    <Button label="primary" />

    <Button label="secondary" color="secondary" />

    <Button label="success" color="success" />

    <Button label="danger" color="danger" />
  </DocumentPanel>
</template>
