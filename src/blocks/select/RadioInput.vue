<script setup lang="ts">
import type { RadioInputType } from './types';
import Text from '../typography/Text.vue';

defineProps<{
  input: RadioInputType;
}>();
</script>

<template>
  <div class="flex flex-row gap-2">
    <input type="radio" :id="input.id" :name="input.groupName" :value="input.value" />

    <Text tag="label" :for="input.id">
      {{ input.label }}
    </Text>
  </div>
</template>
