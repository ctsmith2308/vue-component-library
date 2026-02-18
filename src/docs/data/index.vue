<script setup lang="ts">
import { dataSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="dataSectionConfig" />
</template>
