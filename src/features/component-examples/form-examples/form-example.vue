<script setup lang="ts">
import { ref } from 'vue';

import { Button, Form, FormField, type ValidationRule, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
  <Form :initialValues="initialValues" @submit="handleSubmit" @error="handleError">
        <template #default="{ isSubmitting }">
          <FormField name="email" label="Email" :rules="emailRules" helpText="Enter your email address">
            <template #default="{ value, updateValue, hasError }">
              <input
                :value="value"
                @input="updateValue(($event.target as HTMLInputElement).value)"
                type="email"
                class="input-base border-base hocus-base"
                :class="{ 'border-danger': hasError }"
              />
            </template>
          </FormField>

          <FormField name="password" label="Password" :rules="passwordRules">
            <template #default="{ value, updateValue }">
              <input
                :value="value"
                @input="updateValue(($event.target as HTMLInputElement).value)"
                type="password"
                class="input-base border-base hocus-base"
              />
            </template>
          </FormField>

          <Button type="submit" label="Submit" :loading="isSubmitting" />
        </template>
      </Form>
 `);

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: '',
};

const emailRules: ValidationRule[] = [
  { required: true, message: 'Email is required' },
  {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email',
  },
];

const passwordRules: ValidationRule[] = [
  { required: true },
  { minLength: 8, message: 'Password must be at least 8 characters' },
];

const handleSubmit = (values: Record<string, unknown>): void => {
  console.log('Form submitted:', values);
};

const handleError = (errors: Record<string, string>): void => {
  console.log('Validation errors:', errors);
};
</script>

<template>
  <ShowcaseSection title="Form & FormField">
    <template #examples>
      <Form :initialValues="initialValues" @submit="handleSubmit" @error="handleError">
        <template #default="{ isSubmitting }">
          <FormField name="email" label="Email" :rules="emailRules" helpText="Enter your email address">
            <template #default="{ value, updateValue, hasError }">
              <input
                :value="value"
                @input="updateValue(($event.target as HTMLInputElement).value)"
                type="email"
                class="input-base border-base hocus-base"
                :class="{ 'border-danger': hasError }"
              />
            </template>
          </FormField>

          <FormField name="password" label="Password" :rules="passwordRules">
            <template #default="{ value, updateValue }">
              <input
                :value="value"
                @input="updateValue(($event.target as HTMLInputElement).value)"
                type="password"
                class="input-base border-base hocus-base"
              />
            </template>
          </FormField>

          <Button type="submit" label="Submit" :loading="isSubmitting" />
        </template>
      </Form>
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
