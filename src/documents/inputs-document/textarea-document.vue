<script setup lang="ts">
import { ref } from 'vue'

import { DocumentPanel } from '@/components/panels'

const codeSnippet = ref(
  `<MyCustomComponent />`
)
</script>

<template>
  <DocumentPanel header="Im the doc header" :code-snippet="codeSnippet">
  </DocumentPanel>
</template>
