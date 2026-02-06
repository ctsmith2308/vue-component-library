<script setup lang="ts">
import type { RadioInputGroup } from './types';

import { RadioInput } from '.';

const props = defineProps<RadioInputGroup>();

console.log(props)
</script>

<template>
  <RadioInput v-for="(input, idx) in radioInputs" :key="idx" :input="input"/>
</template>
