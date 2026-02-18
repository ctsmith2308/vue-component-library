<script setup lang="ts">
import { Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Rounded';

const description = 'Use the rounded prop to apply pill-shaped corners instead of the default rounded-md.';

const htmlString = toHtmlHighlight(description, 'rounded');

const codeSnippet = `
  <Button label="primary" rounded />

  <Button label="secondary" color="secondary" rounded />

  <Button label="outlined" variant="outlined" rounded />
`;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Button label="primary" rounded />

    <Button label="secondary" color="secondary" rounded />

    <Button label="outlined" variant="outlined" rounded />
  </DocumentExampleSection>
</template>
