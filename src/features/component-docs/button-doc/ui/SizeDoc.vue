<script setup lang="ts">
import { Button } from '@/blocks';
import { DocPanelSection } from '@/compositions/docs';

const content = {
  title: 'Basic',
  description: 'Use the size property to change the size of the button',
  keyword: 'label',
  codeSnippet: `
  <Button label="small" size="sm" />

  <Button label="medium" size="md" />

  <Button label="large" size="lg" />

  <Button label="x-large" size="xl" />

  <Button label="jumbo" size="jumbo" />
  `,
};
</script>

<template>
  <DocPanelSection :content="content">
    <Button label="small" size="sm" />

    <Button label="medium" size="md" />

    <Button label="large" size="lg" />

    <Button label="x-large" size="xl" />

    <Button label="jumbo" size="jumbo" />
  </DocPanelSection>
</template>
