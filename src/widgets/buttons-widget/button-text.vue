<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/buttons'
import { DisplayPanel } from '@/components/panel'

const codeSnippet = ref(`
  <Button label="primary" variant="text" />
  <Button label="secondary" color="secondary" variant="text" />
  <Button label="success" color="success" variant="text" />
  <Button label="danger" color="danger" variant="text" />
  `)
</script>

<template>
  <!-- Button Defaults -->
  <DisplayPanel header="Button as Text" content="Text style" :code-snippet="codeSnippet">
    <Button label="primary" variant="text" />

    <Button label="secondary" color="secondary" variant="text" />

    <Button label="success" color="success" variant="text" />

    <Button label="danger" color="danger" variant="text" />
  </DisplayPanel>
</template>
