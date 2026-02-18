<script setup lang="ts">
import { imageSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="imageSectionConfig" />
</template>
