<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `TextInput wraps a native input with label, validation rules, input masking, and Form integration.`;

const htmlString = toHtmlHighlight(description, 'TextInput');
</script>

<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>
