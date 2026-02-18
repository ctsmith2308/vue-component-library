<script setup lang="ts">
import { Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Raised';

const description = 'Use the raised attribute to give the button a shadow.';

const htmlString = toHtmlHighlight(description, 'raised');

const codeSnippet = `
  <Button label="primary" raised />

  <Button label="secondary" color="secondary" raised />

  <Button label="success" color="success" raised />

  <Button label="danger" color="danger" raised />
  `;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Button label="primary" raised />

    <Button label="secondary" color="secondary" raised />

    <Button label="success" color="success" raised />

    <Button label="danger" color="danger" raised />
  </DocumentExampleSection>
</template>
