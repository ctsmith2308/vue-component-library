<script setup lang="ts">
import { exampleConfig } from './config';

import { DocumentComponent } from '@/compositions/document';
</script>

<template>
  <DocumentComponent :document-sections="exampleConfig" />
</template>
