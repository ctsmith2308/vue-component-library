<script setup lang="ts">
import { selectInputSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>
<template>
  <DocumentComponent :document-sections="selectInputSectionConfig" />
</template>