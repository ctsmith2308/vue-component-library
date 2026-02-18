<script setup lang="ts">
import { Accordion } from '@/blocks';
import type { AccordionTab } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Basic';
const description = `Pass a tabs array with a header and optional content string for each panel.`;
const htmlString = toHtmlHighlight(description, 'tabs');
const codeSnippet = `
  <Accordion :tabs="tabs" />

`;

const tabs: AccordionTab[] = [
  { header: 'What is Vue 3?', content: 'Vue 3 is a progressive JavaScript framework for building user interfaces, designed to be incrementally adoptable.' },
  { header: 'What is the Composition API?', content: 'The Composition API is a set of additive function-based APIs that allow flexible composition of component logic.' },
  { header: 'How do I install Vue?', content: 'Scaffold a project with npm create vue@latest or add Vue to an existing project via npm install vue.' },
];
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full">
      <Accordion :tabs="tabs" />
    </div>
  </DocumentExampleSection>
</template>
