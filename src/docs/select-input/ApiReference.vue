<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';
const description = `SelectInput renders a fully accessible custom dropdown, keeping a hidden native select for form submission.`;
const htmlString = toHtmlHighlight(description, 'SelectInput');
</script>
<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>