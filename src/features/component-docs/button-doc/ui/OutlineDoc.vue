<script setup lang="ts">
import { Button } from '@/blocks';
import { DocPanelSection } from '@/compositions/docs';

const content = {
  title: 'Basic',
  description: 'Use the variant property to render the outlined version of the button.',
  keyword: 'variant',
  codeSnippet: `
  <Button label="primary" variant="outlined" />

  <Button label="secondary" color="secondary" variant="outlined" />

  <Button label="success" color="success" variant="outlined" />

  <Button label="danger" color="danger" variant="outlined" />
  `,
};
</script>

<template>
  <DocPanelSection :content="content">
    <Button label="primary" variant="outlined" />

    <Button label="secondary" color="secondary" variant="outlined" />

    <Button label="success" color="success" variant="outlined" />

    <Button label="danger" color="danger" variant="outlined" />
  </DocPanelSection>
</template>
