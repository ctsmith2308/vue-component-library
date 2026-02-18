<script setup lang="ts">
import { RadioInput } from '@/blocks';
import type { RadioInput as RadioInputType } from '@/blocks/select/types';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Radio Input';

const description = `RadioInput renders a single radio option. Group them by using the same groupName in each input object.`;

const htmlString = toHtmlHighlight(description, 'groupName');

const codeSnippet = `
  <RadioInput :input="{ id: 'opt-a', groupName: 'plan', label: 'Basic', value: 'basic' }" />
  <RadioInput :input="{ id: 'opt-b', groupName: 'plan', label: 'Pro', value: 'pro' }" />

`;

const planOptions: RadioInputType[] = [
  { id: 'plan-basic', groupName: 'plan', label: 'Basic — Free forever', value: 'basic' },
  { id: 'plan-pro', groupName: 'plan', label: 'Pro — $9/month', value: 'pro' },
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
