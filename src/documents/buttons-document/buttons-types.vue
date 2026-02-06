<script setup lang="ts">
import { ref } from 'vue';
import { HeartIcon } from '@/components/icons';
import { Button } from '@/components/buttons';
import { DocumentPanel } from '@/components/panels';

const codeSnippet = ref(`
  <Button label="default" />
  <Button label="loading..." loading />
  <Button label="disabled" disabled />
  <Button label="button link" variant="link" />
  <Button label="rounded" rounded />
  `);
</script>

<template>
  <!-- Button Defaults -->
  <DocumentPanel header="Button" :code-snippet="codeSnippet">
    <Button label="default" icon>
      <HeartIcon />
    </Button>

    <Button label="loading..." loading />

    <Button label="disabled" disabled />

    <Button label="button link" variant="link" />

    <Button label="rounded" rounded />
  </DocumentPanel>
</template>
