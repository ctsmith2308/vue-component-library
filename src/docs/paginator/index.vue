<script setup lang="ts">
import { paginatorSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="paginatorSectionConfig" />
</template>
