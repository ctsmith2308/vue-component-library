<script setup lang="ts">
import { ProgressBar } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Colors';

const description = `The color prop accepts primary, secondary, success, or danger to convey context.`;

const htmlString = toHtmlHighlight(description, 'color');

const codeSnippet = `<ProgressBar :value="65" color="primary" />

<ProgressBar :value="65" color="secondary" />

<ProgressBar :value="65" color="success" />

<ProgressBar :value="65" color="danger" />
`;

const colors = ['primary', 'secondary', 'success', 'danger'] as const;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full flex flex-col gap-4">
      <div v-for="color in colors" :key="color" class="flex flex-col gap-1">
        <span class="text-xs text-content-text-secondary capitalize font-medium">{{ color }}</span>

        <ProgressBar :value="65" :color="color" />
      </div>
    </div>
  </DocumentExampleSection>
</template>
