<script setup lang="ts">
import { progressBarSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="progressBarSectionConfig" />
</template>
