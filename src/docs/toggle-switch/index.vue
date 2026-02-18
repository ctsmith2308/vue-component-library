<script setup lang="ts">
import { toggleSwitchSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>
<template>
  <DocumentComponent :document-sections="toggleSwitchSectionConfig" />
</template>