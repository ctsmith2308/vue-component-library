<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `PasswordInput extends TextInput with a show/hide toggle and a default minLength validation rule.`;

const htmlString = toHtmlHighlight(description, 'PasswordInput');
</script>

<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>
