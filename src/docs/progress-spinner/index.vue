<script setup lang="ts">
import { progressSpinnerSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="progressSpinnerSectionConfig" />
</template>
