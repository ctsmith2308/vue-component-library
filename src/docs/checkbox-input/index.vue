<script setup lang="ts">
import { checkboxInputSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>
<template>
  <DocumentComponent :document-sections="checkboxInputSectionConfig" />
</template>