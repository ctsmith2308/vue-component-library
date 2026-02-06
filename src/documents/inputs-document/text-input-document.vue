<script setup lang="ts">
import { ref } from 'vue'
import { TextInput } from '@/components/inputs'
import { DocumentPanel } from '@/components/panels'

const codeSnippet = ref(
  `<TextInput />`
)

</script>

<template>
   <DocumentPanel header="Text Input" :code-snippet="codeSnippet">
    <TextInput placeholder="username"/>
   </DocumentPanel>
</template>
