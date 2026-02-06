<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/buttons'
import { DocumentPanel } from '@/components/panels'

const codeSnippet = ref(`
  <Button label="primary" raised />
  <Button label="secondary" color="secondary" raised />
  <Button label="success" color="success" raised />
  <Button label="danger" color="danger" raised />
  `)
</script>

<template>
  <DocumentPanel header="Button Raised" :code-snippet="codeSnippet">
    <Button label="primary" raised />

    <Button label="secondary" color="secondary" raised />

    <Button label="success" color="success" raised />

    <Button label="danger" color="danger" raised />
  </DocumentPanel>
</template>
