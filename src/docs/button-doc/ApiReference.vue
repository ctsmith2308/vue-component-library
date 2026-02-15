<script setup lang="ts">
import { ApiPanel } from '@/compositions/docs';
import { buttonApiSections } from './api-config';
</script>

<template>
  <ApiPanel :sections="buttonApiSections" />
</template>
