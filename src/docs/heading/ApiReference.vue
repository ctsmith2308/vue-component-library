<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';
const description = `Heading renders h1–h5 elements with a consistent typographic scale. The size prop maps to the heading level.`;
const htmlString = toHtmlHighlight(description, 'Heading');
</script>
<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>