<script setup lang="ts">
import { Button } from '@/blocks';
import { DocPanelSection } from '@/compositions/docs';

const content = {
  title: 'Color',
  description: 'Use the color property to change the color of the button.',
  keyword: 'color',
  codeSnippet: `
  <Button label="primary" />

  <Button label="secondary" color="secondary" />

  <Button label="success" color="success" />

  <Button label="danger" color="danger" />
  `,
};
</script>

<template>
  <DocPanelSection :content="content">
    <Button label="primary" />

    <Button label="secondary" color="secondary" />

    <Button label="success" color="success" />

    <Button label="danger" color="danger" />
  </DocPanelSection>
</template>
