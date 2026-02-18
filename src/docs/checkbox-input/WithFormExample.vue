<script setup lang="ts">
import { ref } from 'vue';
import { type CheckboxData, Form, Button, CheckboxInput } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'With Form';
const description = `Embed CheckboxInput inside a Form for validation and submission handling.`;
const htmlString = toHtmlHighlight(description, 'Form');
const codeSnippet = `<Form @submit="onSubmit">
  <CheckboxInput v-model="accepted" :data="termsData" />

  <Button type="submit" label="Submit" />
</Form>
`;

const accepted = ref(false);
const termsData: CheckboxData = { id: 'form-terms-cb', name: 'terms', label: 'I accept the terms and conditions' };
const onSubmit = (isValid: boolean): void => {
  console.log('isValid', isValid);
};
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Form @submit="onSubmit">
      <div class="flex flex-col gap-4">
        <CheckboxInput v-model="accepted" :data="termsData" />

        <Button type="submit" label="Submit" />
      </div>
    </Form>
  </DocumentExampleSection>
</template>
