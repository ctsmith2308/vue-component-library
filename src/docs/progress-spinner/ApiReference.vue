<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `ProgressSpinner displays an animated SVG spinner to indicate an indeterminate loading state.`;

const htmlString = toHtmlHighlight(description, 'ProgressSpinner');
</script>

<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>
