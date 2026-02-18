<script setup lang="ts">
import { chipSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>
<template>
  <DocumentComponent :document-sections="chipSectionConfig" />
</template>