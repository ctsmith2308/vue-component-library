<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/buttons'
import { DisplayPanel } from '@/components/panel'
// import VCodeBlock from '@wdns/vue-code-block'

const codeSnippet = ref(`
  <Button label="primary" />
  <Button label="secondary" color="secondary" />
  <Button label="success" color="success" />
  <Button label="danger" color="danger" />
  `)
</script>

<template>
  <!-- Button Colors -->
  <DisplayPanel
    header="Button Colors"
    content="primary, secondary, success, danger"
    :code-snippet="codeSnippet"
  >
    <Button label="primary" />

    <Button label="secondary" color="secondary" />

    <Button label="success" color="success" />

    <Button label="danger" color="danger" />
  </DisplayPanel>
</template>
