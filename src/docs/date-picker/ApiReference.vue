<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';
const description = `DatePicker renders a custom calendar dropdown. Bind a Date value with v-model and constrain the range with minDate/maxDate.`;
const htmlString = toHtmlHighlight(description, 'DatePicker');
</script>
<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>