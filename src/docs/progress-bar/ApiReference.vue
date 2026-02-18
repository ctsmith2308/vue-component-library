<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `ProgressBar communicates the status of an ongoing process using a determinate or indeterminate fill animation.`;

const htmlString = toHtmlHighlight(description, 'ProgressBar');
</script>

<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>
