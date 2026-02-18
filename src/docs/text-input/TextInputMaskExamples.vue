<script setup lang="ts">
import { ref } from 'vue';
import { TextInput } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Input Masks';

const description = `Use the mask prop to restrict what characters the user can type.`;

const htmlString = toHtmlHighlight(description, 'mask');

const codeSnippet = `
  <TextInput v-model="numeric" name="numeric" mask="numeric" label="Numeric" placeholder="digits only" />

  <TextInput v-model="alpha" name="alpha" mask="alpha" label="Alpha" placeholder="letters only" />

  <TextInput v-model="alphaNum" name="alphaNum" mask="alpha_num" label="Alpha Numeric" placeholder="letters and digits" />

  <TextInput v-model="alphaDash" name="alphaDash" mask="alpha_dash" label="Alpha Dash" placeholder="letters, digits, hyphens" />
`;

const numeric = ref('');
const alpha = ref('');
const alphaNum = ref('');
const alphaDash = ref('');
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex flex-col gap-4 w-full max-w-sm">
      <TextInput v-model="numeric" name="numeric" mask="numeric" label="Numeric" placeholder="digits only" />
      <TextInput v-model="alpha" name="alpha" mask="alpha" label="Alpha" placeholder="letters only" />
      <TextInput v-model="alphaNum" name="alphaNum" mask="alpha_num" label="Alpha Numeric" placeholder="letters and digits" />
      <TextInput v-model="alphaDash" name="alphaDash" mask="alpha_dash" label="Alpha Dash" placeholder="letters, digits, hyphens" />
    </div>
  </DocumentExampleSection>
</template>
