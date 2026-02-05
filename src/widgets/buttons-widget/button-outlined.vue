<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/buttons'
import { DisplayPanel } from '@/components/panel'

const codeSnippet = ref(`
  <Button label="primary" variant="outlined" />
  <Button label="secondary" color="secondary" variant="outlined" />
  <Button label="success" color="success" variant="outlined" />
  <Button label="danger" color="danger" variant="outlined" />
  `)
</script>

<template>
  <!-- Button Defaults -->
  <DisplayPanel header="Button Oultined" content="Outlined style" :code-snippet="codeSnippet">
    <Button label="primary" variant="outlined" />

    <Button label="secondary" color="secondary" variant="outlined" />

    <Button label="success" color="success" variant="outlined" />

    <Button label="danger" color="danger" variant="outlined" />
  </DisplayPanel>
</template>
