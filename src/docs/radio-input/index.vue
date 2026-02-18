<script setup lang="ts">
import { radioInputSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>
<template>
  <DocumentComponent :document-sections="radioInputSectionConfig" />
</template>