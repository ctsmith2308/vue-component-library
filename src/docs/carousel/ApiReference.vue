<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `Carousel presents a scrollable collection of items. Navigation, indicators, and autoplay are all configurable.`;
const htmlString = toHtmlHighlight(description, 'Carousel');
</script>

<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>
