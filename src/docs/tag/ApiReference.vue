<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';
const description = `Tag displays a small status label. Use severity to convey meaning and rounded for pill styling.`;
const htmlString = toHtmlHighlight(description, 'Tag');
</script>
<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>