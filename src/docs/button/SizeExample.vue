<script setup lang="ts">
import { Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Size';

const description = 'Use the size property to change the size of the button';

const htmlString = toHtmlHighlight(description, 'variant');

const codeSnippet = `
  <Button label="small" size="sm" />

  <Button label="medium" size="md" />

  <Button label="large" size="lg" />

  <Button label="x-large" size="xl" />

  <Button label="jumbo" size="jumbo" />
  `;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Button label="small" size="sm" />

    <Button label="medium" size="md" />

    <Button label="large" size="lg" />

    <Button label="x-large" size="xl" />

    <Button label="jumbo" size="jumbo" />
  </DocumentExampleSection>
</template>
