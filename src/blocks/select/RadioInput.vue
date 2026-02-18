<script setup lang="ts">
import type { RadioInputType } from './types';

defineProps<{
  input: RadioInputType;
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
