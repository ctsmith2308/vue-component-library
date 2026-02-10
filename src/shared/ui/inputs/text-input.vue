<script setup lang="ts">
import { computed, inject } from 'vue';
import type { ValidationRule, FormContext } from '@/shared/ui';

interface TextInputProps {
  name?: string;
  modelValue?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
  rules?: ValidationRule;
}

const props = withDefaults(defineProps<TextInputProps>(), {
  placeholder: 'Start typing...',
  type: 'text',
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const formContext = inject<FormContext | null>('formContext', null);

const error = computed(() => {
  if (formContext && props.name) {
    return formContext.getError(props.name);
  }

  return undefined;
});

const isRequired = computed(() => {
  if (formContext && props.name) {
    return formContext.isRequired(props.name);
  }

  return false;
});

const inputClasses = computed(() => [
  'input-base border-base hocus-base',
  {
    'border-danger focus:border-danger': error.value,
    'opacity-50 cursor-not-allowed': props.disabled,
  },
]);

const onInput = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  const value = target.value;

  emit('update:modelValue', value);

  // If inside a Form, notify it
  if (formContext && props.name) {
    formContext.updateValue(props.name, value);
  }
};

const onBlur = (): void => {
  // If inside a Form, mark as touched
  if (formContext && props.name) {
    formContext.markTouched(props.name);
  }
};
</script>

<template>
  <div class="text-input-wrapper w-full">
    <label v-if="label" class="block text-sm font-medium text-content-text mb-1">
      {{ label }}
      <span v-if="isRequired" class="text-danger ml-0.5">*</span>
    </label>

    <input
      :value="modelValue"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="inputClasses"
      :aria-required="isRequired"
      :aria-invalid="!!error"
      @input="onInput"
      @blur="onBlur"
    />

    <p v-if="error" class="text-xs text-danger mt-1">
      {{ error }}
    </p>
  </div>
</template>
