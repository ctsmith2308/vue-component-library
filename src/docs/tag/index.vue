<script setup lang="ts">
import { tagSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>
<template>
  <DocumentComponent :document-sections="tagSectionConfig" />
</template>