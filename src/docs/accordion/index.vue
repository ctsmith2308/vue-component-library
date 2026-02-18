<script setup lang="ts">
import { accordionSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="accordionSectionConfig" />
</template>
