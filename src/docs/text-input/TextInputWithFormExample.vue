<script setup lang="ts">
import { ref } from 'vue';
import { Form, TextInput, Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Text Input';

const description = `Use the v-model property for two-way value binding.`;

const htmlString = toHtmlHighlight(description, 'v-model');

const codeSnippet = `
  <TextInput v-model="username" type="text" placeholder="username" />

`;

const username = ref('');

const onSubmit = (isValid: boolean): void => {
  console.log('isValid', isValid);
};
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Form @submit="onSubmit">
      <div class="flex flex-col gap-4">
        <TextInput v-model="username" type="text" name="username" placeholder="username" :rules="{ required: true }" />

        <Button type="submit" label="Submit" />
      </div>
    </Form>
  </DocumentExampleSection>
</template>
