<script setup lang="ts">
import { Tag } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';
const heading = 'Severity';
const description = `Use the severity prop to communicate status: primary, secondary, success, danger, warning, or info.`;
const htmlString = toHtmlHighlight(description, 'severity');
const codeSnippet = `
  <Tag value="Active" severity="success" />
  <Tag value="Error" severity="danger" />
`;
const severities = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'] as const;
</script>
<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex flex-col gap-4 items-center w-full">
      <div class="flex gap-2 flex-wrap justify-center">
        <Tag v-for="s in severities" :key="s" :value="s" :severity="s" />
      </div>
      <div class="flex gap-2 flex-wrap justify-center">
        <Tag v-for="s in severities" :key="s" :value="s" :severity="s" :rounded="true" />
      </div>
    </div>
  </DocumentExampleSection>
</template>