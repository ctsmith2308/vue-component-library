<script setup lang="ts">
import { Image } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Error Fallback';
const description = `When an image fails to load, the component renders the error slot. Override it to display a custom fallback.`;
const htmlString = toHtmlHighlight(description, 'error');
const codeSnippet = `
  <Image src="/broken.jpg" alt="Broken">
    <template #error>
      <span>Image unavailable</span>
    </template>
  </Image>

`;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-48 h-32">
      <Image src="/this-image-does-not-exist.jpg" alt="Broken" width="192px" height="128px">
        <template #error>
          <div class="flex flex-col items-center justify-center gap-1 h-full">
            <span class="text-2xl">🖼️</span>
            <span class="text-xs text-content-text-secondary">Image unavailable</span>
          </div>
        </template>
      </Image>
    </div>
  </DocumentExampleSection>
</template>
