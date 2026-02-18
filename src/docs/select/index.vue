<script setup lang="ts">
import { selectSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="selectSectionConfig" />
</template>
