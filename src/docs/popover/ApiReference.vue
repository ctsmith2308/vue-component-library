<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `Popover displays floating content anchored to a trigger element. It is controlled imperatively via a template ref, exposing show, hide, and toggle methods — matching PrimeVue's Popover API.`;
const htmlString = toHtmlHighlight(description, 'Popover');
</script>

<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>
