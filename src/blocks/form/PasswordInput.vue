<script setup lang="ts">
import { computed, ref } from 'vue';

import { type TextInputProps } from './types';
import TextInput from './TextInput.vue';
import Button from '../button/Button.vue';
import Icon from '../icon/Icon.vue';

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
      <Button
        variant="text"
        size="sm"
        class="absolute right-3 top-1/2 -translate-y-1/2 text-content-text-secondary hover:text-content-text"
        :aria-label="visible ? 'Hide password' : 'Show password'"
        @click="visible = !visible"
      >
        <template #icon>
          <Icon :iconType="visible ? 'EyeSlashIcon' : 'EyeIcon'" size="sm" />
        </template>
      </Button>
    </template>
  </TextInput>
</template>
