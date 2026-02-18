<script setup lang="ts">
import { Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Outlined';

const description = 'Use the variant property to render the outlined version of the button.';

const htmlString = toHtmlHighlight(description, 'variant');

const codeSnippet = `
  <Button label="primary" variant="outlined" />

  <Button label="secondary" color="secondary" variant="outlined" />

  <Button label="success" color="success" variant="outlined" />

  <Button label="danger" color="danger" variant="outlined" />
  `;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Button label="primary" variant="outlined" />

    <Button label="secondary" color="secondary" variant="outlined" />

    <Button label="success" color="success" variant="outlined" />

    <Button label="danger" color="danger" variant="outlined" />
  </DocumentExampleSection>
</template>
