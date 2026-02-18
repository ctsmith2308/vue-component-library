<script setup lang="ts">
import { Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Ghost';

const description = `Use variant="ghost" for a neutral border button that highlights in the brand colour on hover.`;

const htmlString = toHtmlHighlight(description, 'ghost');

const codeSnippet = `<Button label="ghost" variant="ghost" />

<Button label="ghost raised" variant="ghost" raised />

<Button label="ghost rounded" variant="ghost" rounded />
`;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Button label="ghost" variant="ghost" />

    <Button label="ghost raised" variant="ghost" raised />

    <Button label="ghost rounded" variant="ghost" rounded />
  </DocumentExampleSection>
</template>
