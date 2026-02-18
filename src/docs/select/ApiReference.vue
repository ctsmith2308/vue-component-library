<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { selectInputApiConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `Select components — SelectInput, CheckboxInput, RadioInput, and DatePicker — handle user selection within forms.`;

const htmlString = toHtmlHighlight(description, 'SelectInput');
</script>

<template>
  <DocumentApiSection heading="SelectInput API Reference" :description="htmlString" :apiTableData="selectInputApiConfig" />
</template>
