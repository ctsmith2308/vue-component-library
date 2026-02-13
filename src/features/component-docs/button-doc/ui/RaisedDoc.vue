<script setup lang="ts">
import { Button } from '@/blocks';
import { DocPanelSection } from '@/compositions/docs';

const content = {
  title: 'Basic',
  description: 'Use the raised attribute to give the button a shadow.',
  keyword: 'raised',
  codeSnippet: `
  <Button label="primary" raised />

  <Button label="secondary" color="secondary" raised />

  <Button label="success" color="success" raised />

  <Button label="danger" color="danger" raised />
  `,
};
</script>

<template>
  <DocPanelSection :content="content">
    <Button label="primary" raised />

    <Button label="secondary" color="secondary" raised />

    <Button label="success" color="success" raised />

    <Button label="danger" color="danger" raised />
  </DocPanelSection>
</template>
