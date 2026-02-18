<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';

import { ChevronDownIcon } from '@heroicons/vue/24/solid';

interface SelectOption {
  value: string;
  displayValue: string;
}

interface SelectData {
  id: string;
  name: string;
  label: string;
  options: SelectOption[];
}

interface Props {
  data: SelectData;
}

const props = defineProps<Props>();

const isOpen = ref<boolean>(false);
const selectedValue = ref<string>(props.data.options[0]?.value || '');
const selectContainer = ref<HTMLDivElement | null>(null);
const optionRefs = ref<(HTMLLIElement | null)[]>([]);

const selectedLabel = computed<string>(() => {
  const selected = props.data.options.find((opt) => opt.value === selectedValue.value);
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

const selectOption = (option: SelectOption): void => {
  selectedValue.value = option.value;
  closeDropdown();
};

const closeDropdown = (): void => {
  isOpen.value = false;
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

// Close dropdown when clicking outside
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

// Clear option refs when dropdown closes
watch(isOpen, (newVal: boolean) => {
  if (!newVal) {
    optionRefs.value = [];
  }
});
</script>

<template>
  <div class="custom-select" ref="selectContainer">
    <label :for="data.id" class="visually-hidden">
      {{ data.label }}
    </label>

    <!-- Hidden native select for form submission -->
    <select :name="data.name" :id="data.id" v-model="selectedValue" class="hidden-select">
      <option v-for="(option, idx) in data.options" :key="idx" :value="option.value">
        {{ option.displayValue }}
      </option>
    </select>

    <!-- Custom dropdown button -->
    <button
      type="button"
      class="select-button input-base border-base hocus-base"
      @click="toggleDropdown"
      @keydown.enter.prevent="toggleDropdown"
      @keydown.space.prevent="toggleDropdown"
      @keydown.down.prevent="openAndFocusFirst"
      @keydown.up.prevent="openAndFocusLast"
      :aria-expanded="isOpen"
      :aria-haspopup="true"
      :aria-labelledby="data.id + '-label'"
    >
      <span class="selected-text">{{ selectedLabel }}</span>
      <span class="chevron-wrapper" :class="{ 'chevron-open': isOpen }">
        <ChevronDownIcon />
      </span>
    </button>

    <!-- Dropdown list -->
    <div v-if="isOpen" class="dropdown-wrapper bg-surface rounded-2xl">
      <ul class="dropdown-list" role="listbox">
        <li
          v-for="(option, idx) in data.options"
          :key="idx"
          class="dropdown-option"
          :class="{ selected: selectedValue === option.value }"
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
          {{ option.displayValue }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.visually-hidden {
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

.hidden-select {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  height: 0;
  width: 0;
}

.custom-select {
  position: relative;
  width: 100%;
}

.select-button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background: none;
  text-align: left;
  appearance: none;
}

.selected-text {
  flex: 1;
}

.chevron-wrapper {
  display: flex;
  align-items: center;
  transition: rotate 0.2s ease;
  color: #999999;
}

.chevron-wrapper.chevron-open {
  rotate: -180deg;
}

.chevron-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.dropdown-wrapper {
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border: var(--color-input-border);
  border-radius: 8px;
  overflow: hidden;
}

.dropdown-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown-option {
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.4s;
  background: var(--color-surface);
  border-bottom: var(--color-input-border);
}

.dropdown-option:last-child {
  border-bottom: none;
}

.dropdown-option:hover,
.dropdown-option:focus {
  background: var(--color-brand-lighter);
  outline: none;
}
</style>
