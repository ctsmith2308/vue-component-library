<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `DataTable renders tabular data with built-in sorting, pagination, skeleton loading, and custom cell slots.`;

const htmlString = toHtmlHighlight(description, 'DataTable');
</script>

<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>
