<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';
const description = `RadioInput renders a single radio option. Group multiple RadioInput components using a shared groupName.`;
const htmlString = toHtmlHighlight(description, 'RadioInput');
</script>
<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>