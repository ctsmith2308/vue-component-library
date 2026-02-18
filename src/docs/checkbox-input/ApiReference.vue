<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';
const description = `CheckboxInput is a styled checkbox with v-model support and an accessible label.`;
const htmlString = toHtmlHighlight(description, 'CheckboxInput');
</script>
<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>