<script setup lang="ts">
import { Text } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Sizes & Tags';
const description = `Control text size with the size prop and the rendered HTML element with the tag prop.`;
const htmlString = toHtmlHighlight(description, 'size');
const codeSnippet = `<Text size="sm">Small supporting text.</Text>

<Text>Default body copy.</Text>

<Text size="lg">Large lead paragraph.</Text>
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
        <span class="text-xs text-content-text-secondary font-mono">default</span>
        <Text>Default body text with relaxed line-height for comfortable reading.</Text>
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-xs text-content-text-secondary font-mono">size="lg"</span>
        <Text size="lg">Large lead text for introductory paragraphs or callouts.</Text>
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-xs text-content-text-secondary font-mono">tag variants</span>
        <div class="flex gap-2 flex-wrap">
          <Text v-for="tag in tags" :key="tag" :tag="tag" size="sm">{{ tag }}</Text>
        </div>
      </div>
    </div>
  </DocumentExampleSection>
</template>
