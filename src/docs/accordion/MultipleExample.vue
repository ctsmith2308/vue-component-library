<script setup lang="ts">
import { Accordion } from '@/blocks';
import type { AccordionTab } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Multiple & Disabled';
const description = `Set multiple to allow several panels open at once. Mark a tab disabled to prevent it from being toggled.`;
const htmlString = toHtmlHighlight(description, 'multiple');
const codeSnippet = `<Accordion :tabs="tabs" :multiple="true" :active-index="[0, 1]" />`;

const tabs: AccordionTab[] = [
  { header: 'Panel One', content: 'First panel — starts open.' },
  { header: 'Panel Two', content: 'Second panel — also starts open.' },
  { header: 'Panel Three (Disabled)', content: 'This panel cannot be toggled.', disabled: true },
  { header: 'Panel Four', content: 'Fourth panel — click to open.' },
];
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full">
      <Accordion :tabs="tabs" :multiple="true" :active-index="[0, 1]" />
    </div>
  </DocumentExampleSection>
</template>
