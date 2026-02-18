<script setup lang="ts">
import { ProgressBar } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Progress Bar Colors';

const description = `The color prop accepts primary, secondary, success, or danger.`;

const htmlString = toHtmlHighlight(description, 'color');

const codeSnippet = `
  <ProgressBar :value="60" color="primary" />
  <ProgressBar :value="60" color="secondary" />
  <ProgressBar :value="60" color="success" />
  <ProgressBar :value="60" color="danger" />

`;

const colors = ['primary', 'secondary', 'success', 'danger'] as const;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full flex flex-col gap-4">
      <div v-for="color in colors" :key="color" class="flex flex-col gap-1">
        <span class="text-sm text-content-text-secondary capitalize">{{ color }}</span>
        <ProgressBar :value="60" :color="color" />
      </div>
    </div>
  </DocumentExampleSection>
</template>
