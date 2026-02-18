<script setup lang="ts">
import { skeletonSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="skeletonSectionConfig" />
</template>
