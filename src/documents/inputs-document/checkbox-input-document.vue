<script setup lang="ts">
import { ref } from 'vue';
import { DocumentPanel } from '@/components/panels';

const codeSnippet = ref(`<TextInput />`);
</script>

<template>
  <DocumentPanel header="Checkbox Input" :code-snippet="codeSnippet"> </DocumentPanel>
</template>
