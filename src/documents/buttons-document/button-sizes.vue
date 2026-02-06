<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/buttons'
import { DocumentPanel } from '@/components/panels'

const codeSnippet = ref(`
  <Button label="small" size="sm" />
  <Button label="medium" size="md" />
  <Button label="large" size="lg" />
  <Button label="x-large" size="xl" />
  <Button label="jumbo" size="jumbo" />
  `)
</script>

<template>
  <!-- Button Sizes -->
  <DocumentPanel header="Button Sizes" :code-snippet="codeSnippet">
    <Button label="small" size="sm" />

    <Button label="medium" size="md" />

    <Button label="large" size="lg" />

    <Button label="x-large" size="xl" />

    <Button label="jumbo" size="jumbo" />
  </DocumentPanel>
</template>
