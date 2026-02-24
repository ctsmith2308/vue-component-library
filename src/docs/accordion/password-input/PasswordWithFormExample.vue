<script setup lang="ts">
import { ref } from 'vue';
import { Form, PasswordInput, Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'With Form';

const description = `Inside a Form, PasswordInput validates required and minLength automatically on submit and on blur.`;

const htmlString = toHtmlHighlight(description, 'Form');

const codeSnippet = `
  <Form @submit="onSubmit">
    <PasswordInput
      v-model="password"
      name="password"
      label="Password"
      :min-length="8"
    />

    <PasswordInput
      v-model="confirm"
      name="confirm"
      label="Confirm password"
      :min-length="8"
    />

    <Button type="submit" label="Create account" />
  </Form>
`;

const password = ref('');
const confirm = ref('');

const onSubmit = (isValid: boolean): void => {
  console.log('isValid', isValid);
};
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Form @submit="onSubmit">
      <div class="flex flex-col gap-4 w-full max-w-sm">
        <PasswordInput v-model="password" name="password" label="Password" :min-length="8" />

        <PasswordInput v-model="confirm" name="confirm" label="Confirm password" :min-length="8" />

        <Button type="submit" label="Create account" />
      </div>
    </Form>
  </DocumentExampleSection>
</template>
