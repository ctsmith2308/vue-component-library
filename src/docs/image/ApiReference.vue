<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `Image wraps the native img element with automatic skeleton loading, an error fallback slot, and optional preview mode.`;
const htmlString = toHtmlHighlight(description, 'Image');
</script>

<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>
