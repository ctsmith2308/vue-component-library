<script setup lang="ts">
import { carouselSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="carouselSectionConfig" />
</template>
