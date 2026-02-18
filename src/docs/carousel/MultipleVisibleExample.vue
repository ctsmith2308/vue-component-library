<script setup lang="ts">
import { Carousel } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Multiple Visible';
const description = `Set numVisible to show more than one item at a time. numScroll controls how many items advance per step.`;
const htmlString = toHtmlHighlight(description, 'numVisible');
const codeSnippet = `
  <Carousel :value="items" :num-visible="3" :num-scroll="1" />

`;

const items = Array.from({ length: 8 }, (_, i) => ({ id: i + 1, label: `Item ${i + 1}` }));
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full">
      <Carousel :value="items" :num-visible="3" :num-scroll="1" :show-indicators="true">
        <template #item="{ data }">
          <div class="rounded-lg bg-surface-alt border border-surface-border p-6 flex items-center justify-center min-h-20 mx-1">
            <span class="font-medium text-content-text">{{ (data as { id: number; label: string }).label }}</span>
          </div>
        </template>
      </Carousel>
    </div>
  </DocumentExampleSection>
</template>
