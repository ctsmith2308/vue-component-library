<script setup lang="ts">
import { Tag } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Tag';

const description = `Tags display status labels. Use severity to convey meaning and rounded for pill-style badges.`;

const htmlString = toHtmlHighlight(description, 'severity');

const codeSnippet = `
  <Tag value="Active" severity="success" />
  <Tag value="Pending" severity="warning" :rounded="true" />

`;

const severities = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'] as const;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex flex-col gap-4 w-full items-center">
      <div class="flex gap-2 flex-wrap justify-center">
        <Tag v-for="s in severities" :key="s" :value="s" :severity="s" />
      </div>
      <div class="flex gap-2 flex-wrap justify-center">
        <Tag v-for="s in severities" :key="s" :value="s" :severity="s" :rounded="true" />
      </div>
    </div>
  </DocumentExampleSection>
</template>
