<script setup lang="ts">
import { iconSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="iconSectionConfig" />
</template>
