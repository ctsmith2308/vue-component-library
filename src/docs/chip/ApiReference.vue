<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';
const description = `Chip is a compact element that represents a tag, attribute, or dismissible input value.`;
const htmlString = toHtmlHighlight(description, 'Chip');
</script>
<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>