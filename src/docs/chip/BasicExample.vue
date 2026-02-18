<script setup lang="ts">
import { Chip } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Colors';
const description = `The color prop supports primary, secondary, success, and danger.`;
const htmlString = toHtmlHighlight(description, 'color');
const codeSnippet = `<Chip label="Primary" color="primary" />

<Chip label="Success" color="success" />
`;

const colors = ['primary', 'secondary', 'success', 'danger'] as const;
</script>
<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex gap-2 flex-wrap justify-center">
      <Chip v-for="color in colors" :key="color" :label="color" :color="color" />
    </div>
  </DocumentExampleSection>
</template>
