<script setup lang="ts">
import { feedbackSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="feedbackSectionConfig" />
</template>
