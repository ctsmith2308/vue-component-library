<script setup lang="ts">
import { Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Color';

const description = `Use the color property to change the color of the button.`;

const htmlString = toHtmlHighlight(description, 'color');

const codeSnippet = `<Button label="primary" />

<Button label="secondary" color="secondary" />

<Button label="success" color="success" />

<Button label="danger" color="danger" />
`;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Button label="primary" />

    <Button label="secondary" color="secondary" />

    <Button label="success" color="success" />

    <Button label="danger" color="danger" />
  </DocumentExampleSection>
</template>
