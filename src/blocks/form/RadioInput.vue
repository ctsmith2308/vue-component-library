<script setup lang="ts">
import { toRef } from 'vue';
import type { RadioInputType, ValidationRule } from './types';
import { useFormField } from './composables';
import Text from '../typography/Text.vue';

interface Props {
  input: RadioInputType;
  name: string;
  rules?: ValidationRule;
}

const props = defineProps<Props>();

const { error, isRequired, updateValue, markTouched } = useFormField(toRef(props, 'name'));

const onChange = (event: Event): void => {
  const value = (event.target as HTMLInputElement).value;
  updateValue(value);
  markTouched();
};
</script>

<template>
  <div class="flex flex-col gap-1">
    <div class="flex flex-row gap-2">
      <input
        type="radio"
        :id="input.id"
        :name="name"
        :value="input.value"
        :aria-required="isRequired"
        :aria-invalid="!!error"
        @change="onChange"
      />

      <Text tag="label" :for="input.id">
        {{ input.label }}
        <span v-if="isRequired" class="text-danger ml-0.5">*</span>
      </Text>
    </div>

    <Text v-if="error" tag="p" size="sm" color="danger" class="mt-1">{{ error }}</Text>
  </div>
</template>
