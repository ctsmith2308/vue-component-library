<script setup lang="ts">
import type { RadioInput } from './types';

defineProps<{
 input: RadioInput
}>()

</script>

<template>
  <input type="radio" :id="input.id" :name="input.groupName" :value="input.value" />
  <label :for="input.id">{{ input.label }}</label>
</template>
