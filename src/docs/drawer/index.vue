<script setup lang="ts">
import { DocumentComponent } from '@/compositions/document';
import { drawerSectionConfig } from './config';
</script>

<template>
  <DocumentComponent :document-sections="drawerSectionConfig" />
</template>
