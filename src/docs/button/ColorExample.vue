<script setup lang="ts">
import { Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';

const heading = 'Color';

const htmlString = `Use the <span class="inline-highligh">color<span> property to change the color of the button. `;

const codeSnippet = `
  <Button label="primary" />

  <Button label="secondary" color="secondary" />

  <Button label="success" color="success" />

  <Button label="danger" color="danger" />
  `;
</script>

<template>
  <DocumentExampleSection :heading="heading" :code-snippet="codeSnippet">
    <template #description>
      {{ htmlString }}
    </template>

    <template #default>
      <Button label="primary" />

      <Button label="secondary" color="secondary" />

      <Button label="success" color="success" />

      <Button label="danger" color="danger" />
    </template>
  </DocumentExampleSection>
</template>
