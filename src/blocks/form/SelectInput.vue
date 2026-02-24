<script setup lang="ts">
import { ref, computed, toRef, onMounted, onBeforeUnmount, watch } from 'vue';

import Icon from '../icon/Icon.vue';
import Text from '../typography/Text.vue';
import { useFormField } from './composables';

import type { SelectData, SelectOption, ValidationRule } from './types';

interface Props {
  data: SelectData;
  name: string;
  rules?: ValidationRule;
}

const props = defineProps<Props>();

const { error, isRequired, updateValue, markTouched } = useFormField(toRef(props, 'name'));

const isOpen = ref<boolean>(false);
const selectedValue = ref<string>(props.data.options[0]?.value || '');
const selectContainer = ref<HTMLDivElement | null>(null);
const optionRefs = ref<(HTMLLIElement | null)[]>([]);

const selectedLabel = computed<string>(() => {
  const selected = props.data.options.find((opt: SelectOption) => opt.value === selectedValue.value);

  return selected ? selected.displayValue : 'Please select';
});

const toggleDropdown = (): void => {
  isOpen.value = !isOpen.value;
};

const openAndFocusFirst = (): void => {
  isOpen.value = true;

  setTimeout(() => {
    if (optionRefs.value[0]) {
      optionRefs.value[0].focus();
    }
  }, 0);
};

const openAndFocusLast = (): void => {
  isOpen.value = true;

  setTimeout(() => {
    const lastIndex = props.data.options.length - 1;

    if (optionRefs.value[lastIndex]) {
      optionRefs.value[lastIndex].focus();
    }
  }, 0);
};

const closeDropdown = (): void => {
  isOpen.value = false;
  markTouched();
};

const selectOption = (option: SelectOption): void => {
  selectedValue.value = option.value;
  updateValue(option.value);
  closeDropdown();
};

const focusNext = (currentIndex: number): void => {
  const nextIndex = currentIndex + 1;

  if (nextIndex < props.data.options.length && optionRefs.value[nextIndex]) {
    optionRefs.value[nextIndex]!.focus();
  }
};

const focusPrevious = (currentIndex: number): void => {
  const prevIndex = currentIndex - 1;

  if (prevIndex >= 0 && optionRefs.value[prevIndex]) {
    optionRefs.value[prevIndex]!.focus();
  }
};

const handleClickOutside = (event: MouseEvent): void => {
  if (selectContainer.value && !selectContainer.value.contains(event.target as Node)) {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

watch(isOpen, (newVal: boolean) => {
  if (!newVal) {
    optionRefs.value = [];
  }
});
</script>

<template>
  <div class="relative w-full" ref="selectContainer">
    <!-- Visually hidden label -->
    <Text tag="label" :for="data.id" class="sr-only">
      {{ data.label }}
    </Text>

    <!-- Hidden native select for form submission -->
    <select
      :name="name"
      :id="data.id"
      v-model="selectedValue"
      :aria-required="isRequired"
      :aria-invalid="!!error"
      class="absolute opacity-0 pointer-events-none h-0 w-0"
    >
      <option v-for="(option, idx) in data.options" :key="idx" :value="option.value">
        {{ option.displayValue }}
      </option>
    </select>

    <!-- Custom dropdown button -->
    <button
      type="button"
      class="w-full inline-flex justify-between items-center px-3 h-8 gap-3 rounded-md cursor-pointer bg-transparent border hover:border-brand text-brand transition-colors"
      :class="error ? 'border-danger' : 'border-surface-border'"
      @click="toggleDropdown"
      @keydown.enter.prevent="toggleDropdown"
      @keydown.space.prevent="toggleDropdown"
      @keydown.down.prevent="openAndFocusFirst"
      @keydown.up.prevent="openAndFocusLast"
      :aria-expanded="isOpen"
      :aria-haspopup="true"
      :aria-labelledby="data.id + '-label'"
    >
      <span class="flex-1 text-left">{{ selectedLabel }}</span>

      <span
        class="flex items-center size-5 text-content-text-secondary transition-[rotate] duration-200 ease-in-out"
        :class="{ 'rotate-[-180deg]': isOpen }"
      >
        <Icon iconType="ChevronDownIcon" />
      </span>
    </button>

    <!-- Dropdown list -->
    <div
      v-if="isOpen"
      class="absolute top-[calc(100%+1px)] left-0 w-full z-[1000] shadow-[0_0_10px_0_rgba(0,0,0,0.1)] border border-surface-border rounded-lg overflow-hidden bg-surface"
    >
      <ul class="list-none m-0 p-0" role="listbox">
        <li
          v-for="(option, idx) in data.options"
          :key="idx"
          class="flex justify-between items-center px-[10px] py-[10px] cursor-pointer transition-all duration-400 bg-surface border-b border-surface-border last:border-b-0 hover:bg-brand-ghost-hover focus:bg-brand-ghost-hover focus:outline-none"
          :class="{ 'bg-brand-ghost-hover': selectedValue === option.value }"
          role="option"
          :aria-selected="selectedValue === option.value"
          tabindex="0"
          @click="selectOption(option)"
          @keydown.enter.prevent="selectOption(option)"
          @keydown.space.prevent="selectOption(option)"
          @keydown.down.prevent="focusNext(idx)"
          @keydown.up.prevent="focusPrevious(idx)"
          @keydown.esc="closeDropdown"
          :ref="
            (el) => {
              if (el) optionRefs[idx] = el as HTMLLIElement;
            }
          "
        >
          <Text tag="span">{{ option.displayValue }}</Text>
        </li>
      </ul>
    </div>

    <Text v-if="error" tag="p" size="sm" color="danger" class="mt-1">{{ error }}</Text>
  </div>
</template>
