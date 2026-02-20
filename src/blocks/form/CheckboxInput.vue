<script setup lang="ts">
import { ref, watch, toRef } from 'vue';
import type { CheckboxData, ValidationRule } from './types';
import { useFormField } from './composables';
import Icon from '../icon/Icon.vue';
import Text from '../typography/Text.vue';

interface Props {
  data: CheckboxData;
  modelValue?: boolean;
  name: string;
  rules?: ValidationRule;
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
});

const emit = defineEmits<Emits>();

const { error, isRequired, updateValue, markTouched } = useFormField(toRef(props, 'name'));

const isChecked = ref<boolean>(props.modelValue !== undefined ? props.modelValue : (props.data.checked ?? false));

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== undefined) {
      isChecked.value = newValue;
    }
  },
);

const handleChange = (): void => {
  emit('update:modelValue', isChecked.value);
  emit('change', isChecked.value);
  updateValue(isChecked.value);
  markTouched();
};
</script>

<template>
  <div class="inline-block">
    <Text
      tag="label"
      size="md"
      color="default"
      :for="data.id"
      class="flex items-center gap-2.5 cursor-pointer select-none p-2.5 rounded-lg transition-colors duration-200 hover:bg-brand-ghost-hover"
    >
      <!-- Native input hidden but peer-connected for focus state -->
      <input
        type="checkbox"
        :id="data.id"
        :name="name"
        :value="data.value"
        v-model="isChecked"
        @change="handleChange"
        :aria-required="isRequired"
        :aria-invalid="!!error"
        class="absolute opacity-0 pointer-events-none h-0 w-0 peer"
      />

      <!-- Custom checkbox visual -->
      <span
        class="w-5 h-5 border-2 rounded flex items-center justify-center shrink-0 transition-all duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-brand peer-focus-visible:ring-offset-1"
        :class="isChecked ? 'bg-brand border-brand' : 'bg-transparent border-input-border hover:bg-brand-ghost-hover'"
      >
        <Icon v-if="isChecked" iconType="CheckIcon" size="sm" class="text-brand-contrast" />
      </span>

      {{ data.label }}
      <span v-if="isRequired" class="text-danger ml-0.5">*</span>
    </Text>

    <Text v-if="error" tag="p" size="sm" color="danger" class="mt-1 ml-2.5">{{ error }}</Text>
  </div>
</template>
