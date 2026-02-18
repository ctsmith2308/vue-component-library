<script setup lang="ts">
import { textInputSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="textInputSectionConfig" />
</template>
