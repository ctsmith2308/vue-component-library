<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/buttons'
import { DisplayPanel } from '@/components/panel'

const codeSnippet = ref(`
  <Button label="default" />
  <Button label="loading..." loading />
  <Button label="disabled" disabled />
  <Button label="button link" variant="link" />
  <Button label="rounded" rounded />
  `)
</script>

<template>
  <!-- Button Defaults -->
  <DisplayPanel
    header="Button"
    content="primary, secondary, success, danger"
    :code-snippet="codeSnippet"
  >
    <Button label="default" />

    <Button label="loading..." loading />

    <Button label="disabled" disabled />

    <Button label="button link" variant="link" />

    <Button label="rounded" rounded />
  </DisplayPanel>
</template>
