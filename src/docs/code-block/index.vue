<script setup lang="ts">
import { codeBlockSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="codeBlockSectionConfig" />
</template>
