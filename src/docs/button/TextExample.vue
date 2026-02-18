<script setup lang="ts">
import { Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Text';

const description = `Use variant="text" to render a borderless button styled only with the colour's text colour.`;

const htmlString = toHtmlHighlight(description, 'text');

const codeSnippet = `<Button label="primary" variant="text" />

<Button label="secondary" color="secondary" variant="text" />

<Button label="success" color="success" variant="text" />

<Button label="danger" color="danger" variant="text" />
`;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Button label="primary" variant="text" />

    <Button label="secondary" color="secondary" variant="text" />

    <Button label="success" color="success" variant="text" />

    <Button label="danger" color="danger" variant="text" />
  </DocumentExampleSection>
</template>
