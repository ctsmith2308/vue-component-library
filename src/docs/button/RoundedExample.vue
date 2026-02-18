<script setup lang="ts">
import { Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Rounded';

const description = 'Use the rounded attribute to give the button rounded edges.';

const htmlString = toHtmlHighlight(description, 'variant');

const codeSnippet = `<Button label="rounded" rounded />`;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Button label="rounded" rounded />
  </DocumentExampleSection>
</template>
