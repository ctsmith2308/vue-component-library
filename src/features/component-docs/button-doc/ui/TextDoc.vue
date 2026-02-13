<script setup lang="ts">
import { Button } from '@/blocks';
import { DocPanelSection } from '@/compositions/docs';

const content = {
  title: 'Basic',
  description: 'Use the variant property to render buttons as textual elements.',
  keyword: 'variant',
  codeSnippet: `
  <Button label="primary" variant="text" />

  <Button label="secondary" color="secondary" variant="text" />

  <Button label="success" color="success" variant="text" />

  <Button label="danger" color="danger" variant="text" />
  `,
};
</script>

<template>
  <DocPanelSection :content="content">
    <Button label="primary" variant="text" />

    <Button label="secondary" color="secondary" variant="text" />

    <Button label="success" color="success" variant="text" />

    <Button label="danger" color="danger" variant="text" />
  </DocPanelSection>
</template>
