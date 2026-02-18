<script setup lang="ts">
import { Heading } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Heading';

const description = `Use the size prop (1–5) to render the appropriate heading level with corresponding typography scale.`;

const htmlString = toHtmlHighlight(description, 'size');

const codeSnippet = `
  <Heading :size="1">Page Title</Heading>
  <Heading :size="2">Major Section</Heading>
  <Heading :size="3">Subsection</Heading>
  <Heading :size="4">Component Heading</Heading>
  <Heading :size="5">Minor Heading</Heading>

`;

const levels: Array<{ size: number; label: string }> = [
  { size: 1, label: 'h1 — Page Title' },
  { size: 2, label: 'h2 — Major Section' },
  { size: 3, label: 'h3 — Subsection' },
  { size: 4, label: 'h4 — Component Heading' },
  { size: 5, label: 'h5 — Minor Heading' },
];
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex flex-col gap-4 w-full">
      <div v-for="level in levels" :key="level.size" class="flex flex-col gap-1">
        <span class="text-xs text-content-text-secondary font-mono">size={{ level.size }}</span>
        <Heading :size="level.size">{{ level.label }}</Heading>
      </div>
    </div>
  </DocumentExampleSection>
</template>
