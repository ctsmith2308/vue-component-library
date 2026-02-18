<script setup lang="ts">
import { ProgressBar } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Indeterminate';

const description = `Set mode to indeterminate for a continuously animating bar when progress cannot be measured.`;

const htmlString = toHtmlHighlight(description, 'indeterminate');

const codeSnippet = `
  <ProgressBar mode="indeterminate" color="primary" />

`;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full">
      <ProgressBar mode="indeterminate" color="primary" />
    </div>
  </DocumentExampleSection>
</template>
