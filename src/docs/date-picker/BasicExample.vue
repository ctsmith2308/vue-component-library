<script setup lang="ts">
import { ref } from 'vue';
import DatePicker from '@/blocks/select/DatePicker.vue';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';
const heading = 'Basic';
const description = `Use v-model to bind a Date value. The calendar opens on button click and closes on selection.`;
const htmlString = toHtmlHighlight(description, 'v-model');
const codeSnippet = `
  <DatePicker v-model="selectedDate" placeholder="Select a date" />
`;
const selectedDate = ref<Date | null>(null);
</script>
<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full max-w-xs flex flex-col gap-3">
      <DatePicker v-model="selectedDate" placeholder="Select a date" />
      <p class="text-sm text-content-text-secondary">
        Selected: <strong>{{ selectedDate ? selectedDate.toLocaleDateString() : 'none' }}</strong>
      </p>
    </div>
  </DocumentExampleSection>
</template>