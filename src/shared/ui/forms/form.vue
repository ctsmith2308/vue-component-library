<script setup lang="ts">
import { provide, ref, reactive, useSlots, onMounted, onUpdated } from 'vue';

import type { ValidationRule, FormContext, FormProps } from './types';
import { validateFieldValue, parseFieldsFromVNodes } from '@/shared/lib/form-validation';

defineProps<FormProps>();

const emit = defineEmits<{
  submit: [values: Record<string, unknown>];
  invalid: [errors: Record<string, string>];
}>();

const slots = useSlots();
const values = reactive<Record<string, unknown>>({});
const errors = reactive<Record<string, string>>({});
const touched = reactive<Set<string>>(new Set());
const fieldRules = reactive<Map<string, { rules: ValidationRule; label?: string }>>(new Map());
const isSubmitting = ref(false);

// Parse slot content to find inputs with validation
const parseSlotContent = (): void => {
  const vnodes = slots.default?.({ isSubmitting: false, values: {}, errors: {} });

  if (!vnodes) {
    return;
  }

  fieldRules.clear();

  const parsedFields = parseFieldsFromVNodes(vnodes);

  parsedFields.forEach((field) => {
    fieldRules.set(field.name, { rules: field.rules, label: field.label });

    // Initialize value if not exists
    if (!(field.name in values)) {
      values[field.name] = field.initialValue ?? '';
    }
  });
};

// Parse on mount and re-parse whenever slot content changes
onMounted(parseSlotContent);
onUpdated(parseSlotContent);

// Validate a single field
const validateField = async (fieldName: string): Promise<boolean> => {
  const fieldData = fieldRules.get(fieldName);

  if (!fieldData) {
    delete errors[fieldName];

    return true;
  }

  const { rules, label } = fieldData;
  const value = values[fieldName];
  const fieldLabel = label || fieldName;

  const result = await validateFieldValue(value, rules, fieldLabel, values);

  if (!result.isValid && result.error) {
    errors[fieldName] = result.error;

    return false;
  }

  delete errors[fieldName];

  return true;
};

// Validate all fields
const validateAllFields = async (): Promise<boolean> => {
  const validationPromises = Array.from(fieldRules.keys()).map((name) => validateField(name));
  const results = await Promise.all(validationPromises);

  return results.every((isValid) => isValid);
};

// Handle field value update
const updateValue = (name: string, value: unknown): void => {
  values[name] = value;

  if (touched.has(name)) {
    validateField(name);
  }
};

// Handle field blur
const markTouched = (name: string): void => {
  touched.add(name);
  validateField(name);
};

// Get field error
const getError = (name: string): string | undefined => {
  return errors[name];
};

// Check if field is required
const isRequired = (name: string): boolean => {
  const fieldData = fieldRules.get(name);

  return !!fieldData?.rules?.required;
};

// Provide form context for inputs to report values
provide<FormContext>('formContext', {
  updateValue,
  markTouched,
  getError,
  isRequired,
});

// Handle form submission
const onSubmit = async (): Promise<void> => {
  if (isSubmitting.value) {
    return;
  }

  isSubmitting.value = true;

  try {
    // Mark all fields as touched
    fieldRules.forEach((_, name) => touched.add(name));

    // Validate all fields
    const isValid = await validateAllFields();

    if (!isValid) {
      emit('invalid', { ...errors });

      return;
    }

    emit('submit', { ...values });
  } finally {
    isSubmitting.value = false;
  }
};

defineExpose({
  isSubmitting,
  validateAllFields,
  errors,
  values,
});
</script>

<template>
  <form @submit.prevent="onSubmit" :class="customClass">
    <slot :isSubmitting="isSubmitting" :values="values" :errors="errors" />
  </form>
</template>
