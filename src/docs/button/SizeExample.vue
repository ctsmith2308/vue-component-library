<script setup lang="ts">
import { Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Sizes';

const description = 'Use the size prop to control the height and max-width of the button.';

const htmlString = toHtmlHighlight(description, 'size');

const codeSnippet = `
  <Button label="sm" size="sm" />

  <Button label="md" size="md" />

  <Button label="lg" size="lg" />

  <Button label="xl" size="xl" />

  <Button label="jumbo" size="jumbo" />
`;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex items-end gap-3 flex-wrap">
      <Button label="sm" size="sm" />
      <Button label="md" size="md" />
      <Button label="lg" size="lg" />
      <Button label="xl" size="xl" />
      <Button label="jumbo" size="jumbo" />
    </div>
  </DocumentExampleSection>
</template>
