<script setup lang="ts">
import { ref } from 'vue';

import { PasswordInput } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Password';

const description = 'Password is used with the v-model property for two-way value binding';

const htmlString = toHtmlHighlight(description, 'v-model');

const codeSnippet = `<PasswordInput v-model="password"/>`;

const passwordInput = ref('');
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <PasswordInput v-model="passwordInput" />
  </DocumentExampleSection>
</template>
