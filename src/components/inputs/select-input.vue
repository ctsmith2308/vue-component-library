<script setup lang="ts">
import type { SelectInput } from './types'

defineProps<{
  data: SelectInput
}>()
</script>

<template>
  <label :for="data.id" class="visually-hidden">
    {{data.label}}
  </label>

  <select :name="data.name" :id="data.id" class="input-base border-base hocus-base">
    <option v-for="(option, idx) in data.options" :key="idx" :value="option.value">
      {{ option.displayValue }}
    </option>
  </select>
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
    padding: 0;  /* Optional */
    border: 0;   /* Optional */
  }
</style>
