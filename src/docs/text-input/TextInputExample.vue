<script setup lang="ts">
import { ref } from 'vue';
import { TextInput } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Basic';

const description = `Use v-model for two-way binding. The label prop renders a visible label above the input.`;

const htmlString = toHtmlHighlight(description, 'label');

const codeSnippet = `
  <TextInput v-model="username" name="username" label="Username" placeholder="Enter username" />

  <TextInput v-model="email" name="email" type="email" label="Email" placeholder="you@example.com" />

  <TextInput v-model="amount" name="amount" type="number" label="Amount" placeholder="0.00" />
`;

const username = ref('');
const email = ref('');
const amount = ref('');
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex flex-col gap-4 w-full max-w-sm">
      <TextInput v-model="username" name="username" label="Username" placeholder="Enter username" />
      <TextInput v-model="email" name="email" type="email" label="Email" placeholder="you@example.com" />
      <TextInput v-model="amount" name="amount" type="number" label="Amount" placeholder="0.00" />
    </div>
  </DocumentExampleSection>
</template>
