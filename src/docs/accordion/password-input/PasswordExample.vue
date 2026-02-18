<script setup lang="ts">
import { ref } from 'vue';
import { PasswordInput } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Basic';

const description = `PasswordInput includes a show/hide toggle button. It always requires a value and enforces minLength validation.`;

const htmlString = toHtmlHighlight(description, 'minLength');

const codeSnippet = `
  <PasswordInput v-model="password" name="password" label="Password" />
`;

const password = ref('');
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full max-w-sm">
      <PasswordInput v-model="password" name="password" label="Password" />
    </div>
  </DocumentExampleSection>
</template>
