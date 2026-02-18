<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';
const description = `ToggleSwitch is a boolean input styled as an animated on/off toggle. Bind with v-model.`;
const htmlString = toHtmlHighlight(description, 'ToggleSwitch');
</script>
<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>