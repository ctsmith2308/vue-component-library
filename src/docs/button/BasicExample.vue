<script setup lang="ts">
import { Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';

const heading = 'Basic';

const htmlString = `Use the <span class="inline-highligh">label property to provide content to the button.`;

const codeSnippet = `<Button label="I am button" />`;
</script>

<template>
  <DocumentExampleSection :heading="heading" :code-snippet="codeSnippet">
    <template #description>
      {{ htmlString }}
    </template>

    <template #default>
      <Button label="I am button" />
    </template>
  </DocumentExampleSection>
</template>
