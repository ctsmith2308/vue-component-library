<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { progressBarApiConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `Feedback components — ProgressBar, ProgressSpinner, and Skeleton — communicate loading and async state to users.`;

const htmlString = toHtmlHighlight(description, 'ProgressBar');
</script>

<template>
  <DocumentApiSection
    heading="ProgressBar API Reference"
    :description="htmlString"
    :apiTableData="progressBarApiConfig"
  />
</template>
