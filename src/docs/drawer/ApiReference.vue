<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `Drawer renders a panel that slides in from any edge of the screen. Control visibility with isOpen and listen for the close emit to handle state.`;
const htmlString = toHtmlHighlight(description, 'Drawer');
</script>

<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>
