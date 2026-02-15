<script setup lang="ts">
import { Button } from '@/blocks';
import { ExampleSection } from '@/compositions/docs';

const content = {
  title: 'Basic',
  description: 'Use the rounded attribute to give the button rounded edges.',
  keyword: 'rounded',
  codeSnippet: `
  <Button label="rounded" rounded />
  `,
};
</script>

<template>
  <ExampleSection :content="content">
    <Button label="rounded" rounded />
  </ExampleSection>
</template>
