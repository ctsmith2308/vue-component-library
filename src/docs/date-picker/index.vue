<script setup lang="ts">
import { datePickerSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="datePickerSectionConfig" />
</template>
