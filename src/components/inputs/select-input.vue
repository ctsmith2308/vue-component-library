<script setup lang="ts">
import { ChevronDownIcon } from '../icons';
import type { SelectInput } from './types';

defineProps<{
  data: SelectInput;
}>();
</script>

<template>
  <label :for="data.id" class="visually-hidden">
    {{ data.label }}
  </label>

  <select :name="data.name" :id="data.id" class="appearance-none input-base border-base hocus-base">
    <button><selectedoption></selectedoption></button>
    <div class="bg-white">
      <option v-for="(option, idx) in data.options" :key="idx" :value="option.value" class="">
        {{ option.displayValue }}
      </option>
    </div>
  </select>

  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <ChevronDownIcon />
  </div>
</template>

<style lang="css" scoped>
.visually-hidden {
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  margin: -1px; /* Optional, helps with potential edge cases */
  padding: 0; /* Optional */
  border: 0; /* Optional */
}

select,
::picker(select) {
  appearance: base-select;
}

selectedoption {
  font-size: 50px;
  span {
    display: none;
  }
}

::picker(select) {
  width: 500px;
  padding: 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

/* hide checkmark */
option::before {
  display: none;
}

option {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  &:checked {
    border-color: black;
  }
}

button {
  appearance: none;
  background: none;
  border: 1px solid white;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
}
</style>
