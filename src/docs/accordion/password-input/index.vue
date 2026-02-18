<script setup lang="ts">
import { passwordInputSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="passwordInputSectionConfig" />
</template>
