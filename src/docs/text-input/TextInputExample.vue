<script setup lang="ts">
import { ref } from 'vue';
import { TextInput } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Text Input';

const description = `Use the v-model property for two-way value binding.`;

const htmlString = toHtmlHighlight(description, 'v-model');

const codeSnippet = `
  <TextInput v-model="username" type="text" placeholder="username" />

`;

const username = ref('');
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <TextInput v-model="username" type="text" name="username" placeholder="username" />
  </DocumentExampleSection>
</template>
