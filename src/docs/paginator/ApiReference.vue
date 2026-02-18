<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `Paginator renders page navigation controls. It is used internally by DataTable but can also be used standalone.`;

const htmlString = toHtmlHighlight(description, 'Paginator');
</script>

<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>
