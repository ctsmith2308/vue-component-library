<script setup lang="ts">
import { ref } from 'vue';

import { DatePicker, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
 <DatePicker v-model="selectedDate" placeholder="Select a date" :minDate="minDate" :maxDate="maxDate" />
 `);

const selectedDate = ref<Date | null>(new Date());
const minDate = ref<Date>(new Date(2024, 0, 1));
const maxDate = ref<Date>(new Date(2025, 11, 31));
</script>

<template>
  <ShowcaseSection title="Date Picker">
    <template #examples>
      <DatePicker v-model="selectedDate" placeholder="Select a date" :minDate="minDate" :maxDate="maxDate" />
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
