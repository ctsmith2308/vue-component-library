<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { avatarApiConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `Miscellaneous components — Avatar, Chip, Tag, and ToggleSwitch — provide small, reusable UI building blocks.`;

const htmlString = toHtmlHighlight(description, 'Avatar');
</script>

<template>
  <DocumentApiSection heading="Avatar API Reference" :description="htmlString" :apiTableData="avatarApiConfig" />
</template>
