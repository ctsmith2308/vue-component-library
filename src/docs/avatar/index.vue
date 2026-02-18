<script setup lang="ts">
import { avatarSectionConfig } from './config';
import { DocumentComponent } from '@/compositions/document';
</script>
<template>
  <DocumentComponent :document-sections="avatarSectionConfig" />
</template>