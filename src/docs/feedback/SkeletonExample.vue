<script setup lang="ts">
import { Skeleton } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Skeleton';

const description = `Use the Skeleton component to build placeholder layouts while content is loading. Supports shape, animation, and size.`;

const htmlString = toHtmlHighlight(description, 'shape');

const codeSnippet = `
  <!-- Rectangle (default) -->
  <Skeleton width="100%" height="1.5rem" />

  <!-- Circle -->
  <Skeleton shape="circle" size="3rem" />

  <!-- Card placeholder -->
  <div class="flex gap-3">
    <Skeleton shape="circle" size="3rem" animation="pulse" />
    <div class="flex flex-col gap-2 flex-1">
      <Skeleton height="0.75rem" width="60%" />
      <Skeleton height="0.75rem" width="40%" />
    </div>
  </div>

`;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <span class="text-sm text-content-text-secondary">Rectangle</span>
        <Skeleton width="100%" height="1.5rem" />
        <Skeleton width="80%" height="1rem" />
        <Skeleton width="60%" height="1rem" />
      </div>

      <div class="flex flex-col gap-2">
        <span class="text-sm text-content-text-secondary">Shapes</span>
        <div class="flex items-center gap-4">
          <div class="flex flex-col items-center gap-1">
            <Skeleton shape="circle" size="3rem" />
            <span class="text-xs text-content-text-secondary">circle</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <Skeleton shape="square" size="3rem" />
            <span class="text-xs text-content-text-secondary">square</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <Skeleton shape="rectangle" width="5rem" height="3rem" />
            <span class="text-xs text-content-text-secondary">rectangle</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <span class="text-sm text-content-text-secondary">Card Placeholder</span>
        <div class="flex gap-3 items-start">
          <Skeleton shape="circle" size="2.5rem" />
          <div class="flex flex-col gap-2 flex-1">
            <Skeleton height="0.75rem" width="60%" />
            <Skeleton height="0.75rem" width="40%" />
          </div>
        </div>
      </div>
    </div>
  </DocumentExampleSection>
</template>
