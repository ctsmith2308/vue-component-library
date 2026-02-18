<script setup lang="ts">
import { miscSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="miscSectionConfig" />
</template>
