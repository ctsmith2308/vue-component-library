<script setup lang="ts">
import { ProgressSpinner } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Progress Spinner';

const description = `Use ProgressSpinner to indicate an indeterminate loading state. Control size and color.`;

const htmlString = toHtmlHighlight(description, 'ProgressSpinner');

const codeSnippet = `
  <ProgressSpinner size="sm" />
  <ProgressSpinner size="md" />
  <ProgressSpinner size="lg" color="secondary" />
  <ProgressSpinner size="xl" color="success" />

`;

const sizes = ['sm', 'md', 'lg', 'xl'] as const;
const colors = ['primary', 'secondary', 'success', 'danger'] as const;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex flex-col gap-6 items-center w-full">
      <div class="flex items-end gap-6 flex-wrap justify-center">
        <div v-for="size in sizes" :key="size" class="flex flex-col items-center gap-2">
          <ProgressSpinner :size="size" />
          <span class="text-xs text-content-text-secondary">{{ size }}</span>
        </div>
      </div>

      <div class="flex items-center gap-6 flex-wrap justify-center">
        <div v-for="color in colors" :key="color" class="flex flex-col items-center gap-2">
          <ProgressSpinner size="md" :color="color" />
          <span class="text-xs text-content-text-secondary capitalize">{{ color }}</span>
        </div>
      </div>
    </div>
  </DocumentExampleSection>
</template>
