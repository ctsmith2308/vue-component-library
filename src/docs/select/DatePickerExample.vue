<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Date Picker';

const description = `DatePicker renders a custom calendar dropdown. Use v-model for two-way Date binding.`;

const htmlString = toHtmlHighlight(description, 'v-model');

const codeSnippet = `
  <DatePicker v-model="selectedDate" placeholder="Select a date" />

`;

const selectedDate = ref<Date | null>(null);
const minDate = new Date();
minDate.setDate(minDate.getDate() - 30);
const maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 60);
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full max-w-xs flex flex-col gap-4">
      <DatePicker v-model="selectedDate" placeholder="Select a date" />
      <p class="text-sm text-content-text-secondary">
        Selected: <strong>{{ selectedDate ? selectedDate.toLocaleDateString() : 'none' }}</strong>
      </p>
    </div>
  </DocumentExampleSection>
</template>
