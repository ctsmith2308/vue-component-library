<script setup lang="ts">
import { Button } from '@/blocks';
import { DocPanelSection } from '@/compositions/docs';

const content = {
  title: 'Basic',
  description: 'Use the label property to provide content to the button.',
  keyword: 'label',
  codeSnippet: `
  <Button label="I am button" />
  `,
};
</script>

<template>
  <DocPanelSection :content="content">
    <Button label="I am button" />
  </DocPanelSection>
</template>
