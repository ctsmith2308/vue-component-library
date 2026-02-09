<script setup lang="ts">
import type { RadioInput } from './types';

defineProps<{
  input: RadioInput;
}>();
</script>

<template>
  <div class="flex flex-row gap-2">
    <input type="radio" :id="input.id" :name="input.groupName" :value="input.value" />

    <label :for="input.id">
      {{ input.label }}
    </label>
  </div>
</template>
