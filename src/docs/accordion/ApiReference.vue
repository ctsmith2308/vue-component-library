<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `Accordion renders collapsible panels. Toggle each panel individually or allow multiple open at once.`;
const htmlString = toHtmlHighlight(description, 'Accordion');
</script>

<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>
