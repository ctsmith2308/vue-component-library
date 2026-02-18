<script setup lang="ts">
import { headingSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>
<template>
  <DocumentComponent :document-sections="headingSectionConfig" />
</template>