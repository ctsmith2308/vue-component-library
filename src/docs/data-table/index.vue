<script setup lang="ts">
import { dataTableSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="dataTableSectionConfig" />
</template>
