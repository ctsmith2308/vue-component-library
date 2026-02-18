<script setup lang="ts">
import { Text } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Text';

const description = `The Text component renders body copy with muted styling. Control the HTML tag and text size.`;

const htmlString = toHtmlHighlight(description, 'tag');

const codeSnippet = `
  <Text>Default paragraph text with relaxed line-height.</Text>
  <Text size="sm">Smaller body text for supporting details.</Text>
  <Text size="lg" tag="div">Larger text for lead paragraphs.</Text>

`;

const tags = ['p', 'div', 'span', 'label'] as const;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex flex-col gap-4 w-full">
      <div class="flex flex-col gap-1">
        <span class="text-xs text-content-text-secondary font-mono">size="sm"</span>
        <Text size="sm">Small body text — useful for captions and secondary details.</Text>
      </div>
      <div class="flex flex-col gap-1">
        <span class="text-xs text-content-text-secondary font-mono">size="md" (default)</span>
        <Text>Default body text with relaxed line-height for comfortable reading.</Text>
      </div>
      <div class="flex flex-col gap-1">
        <span class="text-xs text-content-text-secondary font-mono">size="lg"</span>
        <Text size="lg">Large lead text for introductory paragraphs or callouts.</Text>
      </div>
      <div class="flex flex-col gap-1">
        <span class="text-xs text-content-text-secondary font-mono">tag variants</span>
        <div class="flex gap-2 flex-wrap">
          <Text v-for="tag in tags" :key="tag" :tag="tag" size="sm">{{ `<${tag}>` }}</Text>
        </div>
      </div>
    </div>
  </DocumentExampleSection>
</template>
