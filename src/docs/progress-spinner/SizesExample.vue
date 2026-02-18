<script setup lang="ts">
import { ProgressSpinner } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Sizes';

const description = `Use the size prop to control spinner dimensions from sm to xl.`;

const htmlString = toHtmlHighlight(description, 'size');

const codeSnippet = `<ProgressSpinner size="sm" />

<ProgressSpinner size="md" />

<ProgressSpinner size="lg" />

<ProgressSpinner size="xl" />
`;

const sizes = ['sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex items-end gap-6">
      <div v-for="size in sizes" :key="size" class="flex flex-col items-center gap-2">
        <ProgressSpinner :size="size" />
        <span class="text-xs text-content-text-secondary">{{ size }}</span>
      </div>
    </div>
  </DocumentExampleSection>
</template>
