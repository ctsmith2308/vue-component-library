<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `The DataTable component renders tabular data with support for sorting, pagination, and custom cell rendering.`;

const htmlString = toHtmlHighlight(description, 'DataTable');
</script>

<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig">
    <template #description>
      {{ htmlString }}
    </template>
  </DocumentApiSection>
</template>
