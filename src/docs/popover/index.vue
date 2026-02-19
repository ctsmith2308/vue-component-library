<script setup lang="ts">
import { popoverSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="popoverSectionConfig" />
</template>
