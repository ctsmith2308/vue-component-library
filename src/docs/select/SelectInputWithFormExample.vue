<script setup lang="ts">
import { ref } from 'vue';
import { Form, Button } from '@/blocks';
import SelectInput from '@/blocks/select/SelectInput.vue';
import type { SelectData } from '@/blocks/select/types';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Select Input with Form';

const description = `Embed SelectInput inside a Form component for submission handling.`;

const htmlString = toHtmlHighlight(description, 'Form');

const codeSnippet = `
  <Form @submit="onSubmit">
    <SelectInput :data="roleSelect" />
    <Button type="submit" label="Submit" />
  </Form>

`;

const roleSelect: SelectData = {
  id: 'role-select',
  name: 'role',
  label: 'Role',
  options: [
    { value: 'admin', displayValue: 'Admin' },
    { value: 'editor', displayValue: 'Editor' },
    { value: 'viewer', displayValue: 'Viewer' },
  ],
};

const onSubmit = (isValid: boolean): void => {
  console.log('isValid', isValid);
};
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Form @submit="onSubmit">
      <div class="flex flex-col gap-4 w-full max-w-xs">
        <SelectInput :data="roleSelect" />
        <Button type="submit" label="Submit" />
      </div>
    </Form>
  </DocumentExampleSection>
</template>
