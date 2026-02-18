<script setup lang="ts">
import RadioInput from '@/blocks/select/RadioInput.vue';
import type { RadioInput as RadioInputType } from '@/blocks/select/types';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';
const heading = 'Basic';
const description = `Give all options the same groupName so only one can be selected at a time.`;
const htmlString = toHtmlHighlight(description, 'groupName');
const codeSnippet = `
  <RadioInput v-for="opt in options" :key="opt.id" :input="opt" />
`;
const planOptions: RadioInputType[] = [
  { id: 'plan-basic', groupName: 'plan', label: 'Basic — Free forever', value: 'basic' },
  { id: 'plan-pro', groupName: 'plan', label: 'Pro — $9 / month', value: 'pro' },
  { id: 'plan-enterprise', groupName: 'plan', label: 'Enterprise — Contact us', value: 'enterprise' },
];
</script>
<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex flex-col gap-2">
      <RadioInput v-for="opt in planOptions" :key="opt.id" :input="opt" />
    </div>
  </DocumentExampleSection>
</template>