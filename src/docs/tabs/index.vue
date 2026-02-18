<script setup lang="ts">
import { tabsSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="tabsSectionConfig" />
</template>
