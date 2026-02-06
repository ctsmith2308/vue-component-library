<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/buttons';
import { DocumentPanel } from '@/components/panels';

const codeSnippet = ref(`
  <Button label="primary" variant="outlined" />
  <Button label="secondary" color="secondary" variant="outlined" />
  <Button label="success" color="success" variant="outlined" />
  <Button label="danger" color="danger" variant="outlined" />
  `);
</script>

<template>
  <!-- Button Defaults -->
  <DocumentPanel header="Button Oultined" :code-snippet="codeSnippet">
    <Button label="primary" variant="outlined" />

    <Button label="secondary" color="secondary" variant="outlined" />

    <Button label="success" color="success" variant="outlined" />

    <Button label="danger" color="danger" variant="outlined" />
  </DocumentPanel>
</template>
