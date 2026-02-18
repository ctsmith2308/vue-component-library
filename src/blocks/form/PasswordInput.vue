<script setup lang="ts">
import { computed, ref } from 'vue';

import { type TextInputProps } from './types';
import TextInput from './TextInput.vue';

interface PasswordInputProps extends TextInputProps {
  minLength?: number;
}

const props = withDefaults(defineProps<PasswordInputProps>(), {
  minLength: 12,
});

const emit = defineEmits<{ 'update:modelValue': [value: string] }>();

const visible = ref(false);

// minLength is the only meaningful form-level rule for passwords.
// Consumer can override the default of 8 if needed.
const rules = computed(() => ({
  required: true,
  minLength: props.minLength,
}));
</script>

<template>
  <TextInput
    v-bind="props"
    :type="visible ? 'text' : 'password'"
    :rules="rules"
    @update:modelValue="emit('update:modelValue', $event)"
  >
    <template #suffix>
      <button
        type="button"
        class="absolute right-3 top-1/2 -translate-y-1/2 text-content-subtle hover:text-content-text"
        :aria-label="visible ? 'Hide password' : 'Show password'"
        @click="visible = !visible"
      >
        <svg
          v-if="visible"
          xmlns="http://www.w3.org/2000/svg"
          class="size-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="size-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
          <line x1="2" y1="2" x2="22" y2="22" />
        </svg>
      </button>
    </template>
  </TextInput>
</template>
