<script setup lang="ts">
import { ref, watch } from 'vue';

interface CheckboxData {
  id: string;
  name: string;
  label: string;
  value?: string;
  checked?: boolean;
}

interface Props {
  data: CheckboxData;
  modelValue?: boolean;
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
});

const emit = defineEmits<Emits>();

// Use v-model if provided, otherwise use internal state with initial checked value
const isChecked = ref<boolean>(props.modelValue !== undefined ? props.modelValue : (props.data.checked ?? false));

// Watch for external v-model changes
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
};
</script>

<template>
  <div class="inline-block">
    <label
      :for="data.id"
      class="flex items-center gap-2.5 cursor-pointer select-none p-2.5 rounded-lg transition-colors duration-200 hover:bg-brand-lighter"
    >
      <input
        type="checkbox"
        :id="data.id"
        :name="data.name"
        :value="data.value"
        v-model="isChecked"
        @change="handleChange"
        class="absolute opacity-0 pointer-events-none h-0 w-0 focus:outline-none peer"
      />
      <span
        class="w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200 shrink-0 peer-focus:outline-none"
        :class="isChecked ? 'bg-brand border-input-border' : 'bg-surface border-input-border'"
      >
        <svg
          v-if="isChecked"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="w-3.5 h-3.5 text-white"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </span>
      <span class="text-base">{{ data.label }}</span>
    </label>
  </div>
</template>
