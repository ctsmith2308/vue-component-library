<script setup lang="ts">
import { ref } from 'vue';
import { Form, TextInput, ShowcaseSection } from '@/shared/ui';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const username = ref('');
const password = ref('');
const passwordConfirm = ref('');

const validatePasswordConfirm = (value: unknown, allValues: Record<string, unknown>): boolean | string => {
  if (value !== allValues.password) {
    return 'Passwords do not match';
  }

  return true;
};

const onSubmit = (values: Record<string, unknown>): void => {
  // const formValues = values as RegisterFormValues;

  console.log('Registering user:', values);
};

const onInvalid = (errors: Record<string, string>): void => {
  console.log('Validation errors:', errors);
};
</script>

<template>
  <ShowcaseSection title="Date Picker">
    <template #examples>
      <div class="max-w-2xl mx-auto p-6">
        <h1 class="text-2xl font-bold text-content-text mb-6">Create Account</h1>

        <Form @submit="onSubmit" @invalid="onInvalid" class="space-y-4" v-slot="{ isSubmitting }">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              name="firstName"
              v-model="firstName"
              label="First Name"
              placeholder="John"
              :rules="{ required: true, alpha: true }"
            />

            <TextInput
              name="lastName"
              v-model="lastName"
              label="Last Name"
              placeholder="Doe"
              :rules="{ required: true, alpha: true }"
            />
          </div>

          <TextInput
            name="email"
            v-model="email"
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            :rules="{ required: 'Email is required', email: true }"
          />

          <TextInput
            name="username"
            v-model="username"
            label="Username"
            placeholder="john_doe"
            :rules="{
              required: true,
              minLength: { value: 3, message: 'Username must be at least 3 characters' },
              maxLength: { value: 20, message: 'Username must be at most 20 characters' },
              alpha_dash: 'Only letters, numbers, dashes, and underscores allowed',
            }"
          />

          <TextInput
            name="password"
            v-model="password"
            label="Password"
            type="password"
            placeholder="Enter password"
            :rules="{
              required: true,
              minLength: { value: 8, message: 'Password must be at least 8 characters' },
            }"
          />

          <TextInput
            name="passwordConfirm"
            v-model="passwordConfirm"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            :rules="{
              required: true,
              custom: validatePasswordConfirm,
            }"
          />

          <!-- <template #default="{ isSubmitting }"> -->
          <div class="flex items-center gap-3 pt-2">
            <button type="submit" :disabled="isSubmitting" class="btn-base btn-primary">
              {{ isSubmitting ? 'Creating account...' : 'Create Account' }}
            </button>

            <button type="reset" class="btn-base btn-outlined">Cancel</button>
          </div>
          <!-- </template> -->
        </Form>
      </div>
    </template>
  </ShowcaseSection>
</template>
