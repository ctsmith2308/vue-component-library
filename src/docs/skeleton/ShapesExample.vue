<script setup lang="ts">
import { Skeleton } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Shapes';

const description = `The shape prop accepts rectangle, circle, or square. Use size for circle and square dimensions.`;

const htmlString = toHtmlHighlight(description, 'shape');

const codeSnippet = `
  <Skeleton shape="rectangle" width="100%" height="1.5rem" />
  <Skeleton shape="circle" size="3rem" />
  <Skeleton shape="square" size="3rem" />

`;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <span class="text-xs text-content-text-secondary font-medium">Rectangle</span>
        <Skeleton shape="rectangle" width="100%" height="1.5rem" />
        <Skeleton shape="rectangle" width="75%" height="1rem" />
        <Skeleton shape="rectangle" width="50%" height="1rem" />
      </div>

      <div class="flex flex-col gap-2">
        <span class="text-xs text-content-text-secondary font-medium">Circle & Square</span>
        <div class="flex items-center gap-4">
          <div class="flex flex-col items-center gap-1">
            <Skeleton shape="circle" size="3rem" />
            <span class="text-xs text-content-text-secondary">circle</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <Skeleton shape="square" size="3rem" />
            <span class="text-xs text-content-text-secondary">square</span>
          </div>
        </div>
      </div>
    </div>
  </DocumentExampleSection>
</template>
