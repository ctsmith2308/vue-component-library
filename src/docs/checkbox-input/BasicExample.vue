<script setup lang="ts">
import { ref } from 'vue';
import { type CheckboxData, CheckboxInput } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Basic';
const description = `Use v-model for two-way boolean binding. Provide a data object with id, name, and label.`;
const htmlString = toHtmlHighlight(description, 'v-model');
const codeSnippet = `<CheckboxInput v-model="accepted" :data="termsData" />`;

const accepted = ref(false);
const newsletter = ref(true);

const termsData: CheckboxData = {
  id: 'terms-cb',
  label: 'I accept the terms and conditions',
};

const newsletterData: CheckboxData = {
  id: 'newsletter-cb',
  label: 'Subscribe to newsletter',
};
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex flex-col gap-1">
      <CheckboxInput v-model="accepted" name="terms" :data="termsData" />

      <CheckboxInput v-model="newsletter" name="newsletter" :data="newsletterData" />

      <p class="text-sm text-content-text-secondary mt-2">
        Terms: <strong>{{ accepted }}</strong> · Newsletter: <strong>{{ newsletter }}</strong>
      </p>
    </div>
  </DocumentExampleSection>
</template>
