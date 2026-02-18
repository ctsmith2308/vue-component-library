<script setup lang="ts">
import { ref } from 'vue';
import { CheckboxInput } from '@/blocks';
import type { CheckboxData } from '@/blocks/select/types';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Checkbox Input';

const description = `CheckboxInput supports v-model for two-way boolean binding. Provide a data object for id, name, and label.`;

const htmlString = toHtmlHighlight(description, 'v-model');

const codeSnippet = `
  <CheckboxInput v-model="accepted" :data="checkboxData" />

`;

const accepted = ref(false);
const newsletter = ref(true);

const termsData: CheckboxData = {
  id: 'terms-checkbox',
  name: 'terms',
  label: 'I accept the terms and conditions',
};

const newsletterData: CheckboxData = {
  id: 'newsletter-checkbox',
  name: 'newsletter',
  label: 'Subscribe to newsletter',
};
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex flex-col gap-2">
      <CheckboxInput v-model="accepted" :data="termsData" />
      <CheckboxInput v-model="newsletter" :data="newsletterData" />
      <p class="text-sm text-content-text-secondary mt-2">
        Terms accepted: <strong>{{ accepted }}</strong> · Newsletter: <strong>{{ newsletter }}</strong>
      </p>
    </div>
  </DocumentExampleSection>
</template>
