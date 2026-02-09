<script setup lang="ts">
import { ref, provide, reactive } from 'vue';

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string;
  message?: string;
}

interface FormField {
  name: string;
  value: any;
  rules?: ValidationRule[];
  error?: string;
}

interface FormProps {
  initialValues?: Record<string, any>;
}

const props = defineProps<FormProps>();

const emit = defineEmits<{
  submit: [values: Record<string, any>];
  error: [errors: Record<string, string>];
}>();

const formState = reactive<{
  fields: Map<string, FormField>;
  isSubmitting: boolean;
  isDirty: boolean;
}>({
  fields: new Map(),
  isSubmitting: false,
  isDirty: false,
});

const registerField = (name: string, rules?: ValidationRule[]) => {
  formState.fields.set(name, {
    name,
    value: props.initialValues?.[name] || '',
    rules,
    error: undefined,
  });
};

const unregisterField = (name: string) => {
  formState.fields.delete(name);
};

const updateField = (name: string, value: any) => {
  const field = formState.fields.get(name);
  if (field) {
    field.value = value;
    field.error = undefined;
    formState.isDirty = true;
  }
};

const validateField = (field: FormField): string | undefined => {
  if (!field.rules) return undefined;

  for (const rule of field.rules) {
    if (rule.required && (!field.value || field.value.toString().trim() === '')) {
      return rule.message || `${field.name} is required`;
    }

    if (rule.minLength && field.value.length < rule.minLength) {
      return rule.message || `${field.name} must be at least ${rule.minLength} characters`;
    }

    if (rule.maxLength && field.value.length > rule.maxLength) {
      return rule.message || `${field.name} must be at most ${rule.maxLength} characters`;
    }

    if (rule.pattern && !rule.pattern.test(field.value)) {
      return rule.message || `${field.name} format is invalid`;
    }

    if (rule.custom) {
      const result = rule.custom(field.value);
      if (result !== true) {
        return typeof result === 'string' ? result : rule.message || `${field.name} is invalid`;
      }
    }
  }

  return undefined;
};

const validate = (): boolean => {
  let isValid = true;
  const errors: Record<string, string> = {};

  formState.fields.forEach((field) => {
    const error = validateField(field);
    if (error) {
      field.error = error;
      errors[field.name] = error;
      isValid = false;
    } else {
      field.error = undefined;
    }
  });

  if (!isValid) {
    emit('error', errors);
  }

  return isValid;
};

const handleSubmit = async () => {
  if (!validate()) return;

  formState.isSubmitting = true;

  const values: Record<string, any> = {};
  formState.fields.forEach((field) => {
    values[field.name] = field.value;
  });

  try {
    emit('submit', values);
  } finally {
    formState.isSubmitting = false;
  }
};

const reset = () => {
  formState.fields.forEach((field) => {
    field.value = props.initialValues?.[field.name] || '';
    field.error = undefined;
  });
  formState.isDirty = false;
};

const getFieldValue = (name: string) => {
  return formState.fields.get(name)?.value;
};

const getFieldError = (name: string) => {
  return formState.fields.get(name)?.error;
};

// Provide form context to child components
provide('form', {
  registerField,
  unregisterField,
  updateField,
  getFieldValue,
  getFieldError,
  isSubmitting: () => formState.isSubmitting,
});

defineExpose({
  validate,
  reset,
  isSubmitting: () => formState.isSubmitting,
  isDirty: () => formState.isDirty,
});
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form w-full">
    <slot
      :values="Object.fromEntries(Array.from(formState.fields.entries()).map(([k, v]) => [k, v.value]))"
      :errors="Object.fromEntries(Array.from(formState.fields.entries()).filter(([, v]) => v.error).map(([k, v]) => [k, v.error]))"
      :isSubmitting="formState.isSubmitting"
      :isDirty="formState.isDirty"
      :validate="validate"
      :reset="reset"
    ></slot>
  </form>
</template>
