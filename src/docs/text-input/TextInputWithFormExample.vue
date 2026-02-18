<script setup lang="ts">
import { ref } from 'vue';
import { Form, TextInput, Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'With Form';

const description = `Wrap TextInput inside a Form to get automatic validation. Pass rules to each field — the Form collects errors and calls onSubmit with an isValid flag.`;

const htmlString = toHtmlHighlight(description, 'rules');

const codeSnippet = `
  <Form @submit="onSubmit">
    <TextInput
      v-model="email"
      name="email"
      type="email"
      label="Email"
      placeholder="you@example.com"
      :rules="{ required: true, email: true }"
    />

    <TextInput
      v-model="username"
      name="username"
      label="Username"
      placeholder="min 3 characters"
      :rules="{ required: true, minLength: 3 }"
    />

    <Button type="submit" label="Submit" />
  </Form>
`;

const email = ref('');
const username = ref('');

const onSubmit = (isValid: boolean): void => {
  console.log('isValid', isValid);
};
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Form @submit="onSubmit">
      <div class="flex flex-col gap-4 w-full max-w-sm">
        <TextInput
          v-model="email"
          name="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          :rules="{ required: true, email: true }"
        />

        <TextInput
          v-model="username"
          name="username"
          label="Username"
          placeholder="min 3 characters"
          :rules="{ required: true, minLength: 3 }"
        />

        <Button type="submit" label="Submit" />
      </div>
    </Form>
  </DocumentExampleSection>
</template>
