<script setup lang="ts">
import { typographySectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="typographySectionConfig" />
</template>
