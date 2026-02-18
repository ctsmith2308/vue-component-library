<script setup lang="ts">
import { computed, toRef } from 'vue';

import type { TextInputProps } from './types';
import { applyMask } from './lib';
import { useFormField } from './composables';

const props = withDefaults(defineProps<TextInputProps>(), {
  placeholder: 'Placeholder...',
  type: 'text',
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const { error, isRequired, updateValue, markTouched } = useFormField(toRef(props, 'name'));

const inputClasses = computed(() => [
  'input-base border-base hocus-base',
  {
    'border-danger focus:border-danger': error.value,
    'opacity-50 cursor-not-allowed': props.disabled,
  },
]);

const onInput = (event: Event): void => {
  const target = event.target as HTMLInputElement;

  let value = target.value;

  if (props.mask) {
    value = applyMask(value, props.mask);

    target.value = value;
  }

  emit('update:modelValue', value);

  updateValue(value);
};

const onBlur = (): void => {
  markTouched();
};

const className = computed(() => props.fluid && 'w-full');
</script>

<template>
  <div :class="className">
    <label v-if="label" class="block text-sm font-medium text-content-text mb-1">
      {{ label }}

      <span v-if="isRequired" class="text-danger ml-0.5">*</span>
    </label>

    <div class="relative">
      <slot name="prefix" />

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
        class="h-10 w-full p-2 border border-input-border text-content-text rounded-md"
      />

      <slot name="suffix" />
    </div>

    <p v-if="error" class="text-xs text-danger mt-1">{{ error }}</p>
  </div>
</template>
