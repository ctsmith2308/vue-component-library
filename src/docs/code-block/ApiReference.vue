<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';
const description = `CodeBlock renders syntax-highlighted code using highlight.js. The theme adapts automatically to light/dark mode.`;
const htmlString = toHtmlHighlight(description, 'CodeBlock');
</script>
<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>