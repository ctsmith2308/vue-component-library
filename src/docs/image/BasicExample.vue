<script setup lang="ts">
import { Image } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Basic';
const description = `Provide a src URL. The component shows a skeleton while loading and falls back on error.`;
const htmlString = toHtmlHighlight(description, 'src');
const codeSnippet = `<Image src="https://picsum.photos/seed/vue/400/250" alt="Sample" />`;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full max-w-sm">
      <Image src="https://picsum.photos/seed/vue/400/250" alt="Sample landscape" />
    </div>
  </DocumentExampleSection>
</template>
