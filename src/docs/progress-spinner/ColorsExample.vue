<script setup lang="ts">
import { ProgressSpinner } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Colors';

const description = `The color prop controls the fill color, accepting primary, secondary, success, or danger.`;

const htmlString = toHtmlHighlight(description, 'color');

const codeSnippet = `
  <ProgressSpinner color="primary" />
  <ProgressSpinner color="secondary" />
  <ProgressSpinner color="success" />
  <ProgressSpinner color="danger" />

`;

const colors = ['primary', 'secondary', 'success', 'danger'] as const;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex items-center gap-6">
      <div v-for="color in colors" :key="color" class="flex flex-col items-center gap-2">
        <ProgressSpinner size="md" :color="color" />
        <span class="text-xs text-content-text-secondary capitalize">{{ color }}</span>
      </div>
    </div>
  </DocumentExampleSection>
</template>
