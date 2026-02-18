<script setup lang="ts">
import { Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Disabled';

const description = 'Use the disabled property to set the disabled status of the button.';

const htmlString = toHtmlHighlight(description, 'disabled');

const codeSnippet = `<Button label="disabled" disabled />`;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Button label="disabled" disabled />
  </DocumentExampleSection>
</template>
