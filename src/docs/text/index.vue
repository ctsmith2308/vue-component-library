<script setup lang="ts">
import { textSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>
<template>
  <DocumentComponent :document-sections="textSectionConfig" />
</template>