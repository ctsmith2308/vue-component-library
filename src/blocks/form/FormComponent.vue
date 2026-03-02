<script setup lang="ts">
import { provide, ref, useSlots, onMounted } from 'vue';

import type { FormProps, FormField, FormContext } from './types';
import { validateField, parseFieldsFromVNodes } from './lib';

defineProps<FormProps>();

const emit = defineEmits<{
  submit: [isValid: boolean];
}>();

const slots = useSlots();

const fields = ref<Map<string, FormField>>(new Map());

const parseSlotContent = (): void => {
  const vnodes = slots.default?.({});

  if (!vnodes) return;

  fields.value = parseFieldsFromVNodes(vnodes);
};

onMounted(parseSlotContent);

const validateFormField = (fieldName: string): boolean => {
  const field = fields.value.get(fieldName);

  if (!field) return true;

  field.error = validateField(field.value, field.rules, fieldName);

  return !field.error;
};

const validateForm = (): boolean => {
  let isValid = true;

  const fieldNames = [...fields.value.keys()];

  fieldNames.forEach((fieldName) => {
    if (!validateFormField(fieldName)) isValid = false;
  });

  return isValid;
};

const updateValue = (name: string, value: unknown): void => {
  const field = fields.value.get(name);

  if (!field) return;

  field.value = value;

  if (field.touched) validateFormField(name);
};

const markTouched = (name: string): void => {
  const field = fields.value.get(name);

  if (!field) return;

  field.touched = true;

  validateFormField(name);
};

const getError = (name: string): string | undefined => fields.value.get(name)?.error;

const isRequired = (name: string): boolean => !!fields.value.get(name)?.rules?.required;

provide<FormContext>('formContext', {
  updateValue,
  markTouched,
  getError,
  isRequired,
});

const onSubmit = (): void => {
  fields.value.forEach((field) => (field.touched = true));

  const isValid = validateForm();

  emit('submit', isValid);
};
</script>

<template>
  <form @submit.prevent="onSubmit" :class="customClass">
    <slot />
  </form>
</template>
