<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `This component is based on the button element `;

const htmlString = toHtmlHighlight(description, 'button');
</script>

<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig">
    <template #description>
      {{ htmlString }}
    </template>
  </DocumentApiSection>
</template>
