<script setup lang="ts">
import { ref } from 'vue';
import { Form, Button } from '@/blocks';
import RadioInput from '@/blocks/select/RadioInput.vue';
import type { RadioInput as RadioInputType } from '@/blocks/select/types';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Radio Input with Form';

const description = `Embed RadioInput options inside a Form for submission handling.`;

const htmlString = toHtmlHighlight(description, 'Form');

const codeSnippet = `
  <Form @submit="onSubmit">
    <RadioInput v-for="opt in options" :key="opt.id" :input="opt" />
    <Button type="submit" label="Submit" />
  </Form>

`;

const selected = ref('monthly');

const billingOptions: RadioInputType[] = [
  { id: 'billing-monthly', groupName: 'billing', label: 'Monthly', value: 'monthly' },
  { id: 'billing-annual', groupName: 'billing', label: 'Annual (save 20%)', value: 'annual' },
];

const onSubmit = (isValid: boolean): void => {
  console.log('Form submitted, isValid:', isValid, 'selected:', selected.value);
};
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Form @submit="onSubmit">
      <div class="flex flex-col gap-3">
        <RadioInput v-for="opt in billingOptions" :key="opt.id" :input="opt" />
        <Button type="submit" label="Submit" />
      </div>
    </Form>
  </DocumentExampleSection>
</template>
