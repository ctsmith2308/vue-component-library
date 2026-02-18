<script setup lang="ts">
import { ref } from 'vue';
import { ProgressBar, Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Determinate';

const description = `Use the value prop (0–100) to set the fill percentage. Enable showValue to display the percentage label.`;

const htmlString = toHtmlHighlight(description, 'value');

const codeSnippet = `
  <ProgressBar :value="progress" :show-value="true" />

`;

const progress = ref(45);

const decrement = () => { progress.value = Math.max(progress.value - 10, 0); };
const increment = () => { progress.value = Math.min(progress.value + 10, 100); };
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full flex flex-col gap-4">
      <ProgressBar :value="progress" :show-value="true" />
      <div class="flex gap-2 justify-center">
        <Button label="-10" size="sm" variant="outlined" @click="decrement" />
        <Button label="+10" size="sm" @click="increment" />
      </div>
    </div>
  </DocumentExampleSection>
</template>
