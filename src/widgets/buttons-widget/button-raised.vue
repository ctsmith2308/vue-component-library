<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/buttons'
import { DisplayPanel } from '@/components/panel'

const codeSnippet = ref(`
  <Button label="primary" raised />
  <Button label="secondary" color="secondary" raised />
  <Button label="success" color="success" raised />
  <Button label="danger" color="danger" raised />
  `)
</script>

<template>
  <!-- Button Raised -->
  <DisplayPanel header="Button Raised" content="Raised style" :code-snippet="codeSnippet">
    <Button label="primary" raised />

    <Button label="secondary" color="secondary" raised />

    <Button label="success" color="success" raised />

    <Button label="danger" color="danger" raised />
  </DisplayPanel>
</template>
