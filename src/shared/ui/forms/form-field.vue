<script setup lang="ts">
import { inject, onMounted, onUnmounted, computed, watch } from 'vue';

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string;
  message?: string;
}

interface FormFieldProps {
  name: string;
  label?: string;
  rules?: ValidationRule[];
  helpText?: string;
}

const props = defineProps<FormFieldProps>();

const form = inject<any>('form', null);

const fieldValue = computed({
  get: () => form?.getFieldValue(props.name) || '',
  set: (value) => form?.updateField(props.name, value),
});

const fieldError = computed(() => form?.getFieldError(props.name));

const hasError = computed(() => !!fieldError.value);

onMounted(() => {
  form?.registerField(props.name, props.rules);
});

onUnmounted(() => {
  form?.unregisterField(props.name);
});

watch(() => props.rules, (newRules) => {
  if (form) {
    form.unregisterField(props.name);
    form.registerField(props.name, newRules);
  }
});
</script>

<template>
  <div class="form-field w-full">
    <label v-if="label" :for="name" class="block text-sm font-medium text-content-text mb-1">
      {{ label }}
      <span v-if="rules?.some(r => r.required)" class="text-danger">*</span>
    </label>

    <slot
      :value="fieldValue"
      :updateValue="(val: any) => fieldValue = val"
      :error="fieldError"
      :hasError="hasError"
    ></slot>

    <p v-if="helpText && !hasError" class="text-xs text-content-text-secondary mt-1">
      {{ helpText }}
    </p>

    <p v-if="hasError" class="text-xs text-danger mt-1">
      {{ fieldError }}
    </p>
  </div>
</template>
