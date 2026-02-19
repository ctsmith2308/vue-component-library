<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `Icon renders a Heroicons SVG via a string key. It fills its parent container, so size is controlled by the wrapper.`;

const htmlString = toHtmlHighlight(description, 'iconType');
</script>

<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>
