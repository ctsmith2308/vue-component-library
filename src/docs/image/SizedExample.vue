<script setup lang="ts">
import { Image } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Sized';
const description = `Control dimensions using the width and height props — accepts CSS strings or numeric pixel values.`;
const htmlString = toHtmlHighlight(description, 'width');
const codeSnippet = `<Image src="..." :width="120" :height="120" alt="Square" />

<Image src="..." width="200px" height="120px" alt="Wide" />
`;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex gap-6 flex-wrap items-end justify-center">
      <div class="flex flex-col items-center gap-2">
        <Image src="https://picsum.photos/seed/a/120/120" :width="120" :height="120" alt="Square" />
        <span class="text-xs text-content-text-secondary">120 × 120</span>
      </div>

      <div class="flex flex-col items-center gap-2">
        <Image src="https://picsum.photos/seed/b/200/120" width="200px" height="120px" alt="Wide" />
        <span class="text-xs text-content-text-secondary">200 × 120</span>
      </div>

      <div class="flex flex-col items-center gap-2">
        <Image src="https://picsum.photos/seed/c/80/140" :width="80" :height="140" alt="Tall" />
        <span class="text-xs text-content-text-secondary">80 × 140</span>
      </div>
    </div>
  </DocumentExampleSection>
</template>
