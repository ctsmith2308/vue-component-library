<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';
const description = `Text renders body copy with a muted tone and relaxed line-height. Control the HTML tag and text size.`;
const htmlString = toHtmlHighlight(description, 'Text');
</script>
<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>