<script setup lang="ts">
import { CodeBlock } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Basic';
const description = `Pass a code string to the codeSnippet prop. The component adapts its theme to the current light/dark mode.`;
const htmlString = toHtmlHighlight(description, 'codeSnippet');
const codeSnippet = `<CodeBlock :code-snippet="snippet" />`;

const snippet = `import { ref } from 'vue';

const count = ref(0);
const increment = () => count.value++;
`;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full">
      <CodeBlock :code-snippet="snippet" />
    </div>
  </DocumentExampleSection>
</template>
