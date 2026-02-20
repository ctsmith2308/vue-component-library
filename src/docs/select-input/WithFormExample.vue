<script setup lang="ts">
import { type SelectData, Form, Button, SelectInput } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'With Form';
const description = `Embed SelectInput inside a Form component for submit handling.`;
const htmlString = toHtmlHighlight(description, 'Form');
const codeSnippet = `<Form @submit="onSubmit">
  <SelectInput
    name="role"
    :rules="{ required: true }"
    :data="roleData"
  />
  <Button type="submit" label="Submit" />
</Form>
`;

const roleData: SelectData = {
  id: 'role-select',
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
        <SelectInput name="role" :rules="{ required: true }" :data="roleData" />

        <Button type="submit" label="Submit" />
      </div>
    </Form>
  </DocumentExampleSection>
</template>
