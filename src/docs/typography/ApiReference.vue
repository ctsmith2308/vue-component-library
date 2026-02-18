<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { headingApiConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `Typography components — Heading and Text — provide a consistent, semantic type system across the library.`;

const htmlString = toHtmlHighlight(description, 'Heading');
</script>

<template>
  <DocumentApiSection heading="Heading API Reference" :description="htmlString" :apiTableData="headingApiConfig" />
</template>
