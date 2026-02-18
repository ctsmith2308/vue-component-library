<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `Tabs organises content into switchable panels. Each tab renders a Vue component as its panel body.`;
const htmlString = toHtmlHighlight(description, 'Tabs');
</script>

<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>
