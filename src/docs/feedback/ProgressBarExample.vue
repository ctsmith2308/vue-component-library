<script setup lang="ts">
import { ref } from 'vue';
import { ProgressBar, Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Progress Bar';

const description = `Use the value prop (0–100) to control the fill. Set mode to indeterminate for continuous animation.`;

const htmlString = toHtmlHighlight(description, 'value');

const codeSnippet = `
  <ProgressBar :value="progress" color="primary" :show-value="true" />

  <ProgressBar mode="indeterminate" color="secondary" />

`;

const progress = ref(45);

const increment = () => {
  progress.value = Math.min(progress.value + 10, 100);
};
const decrement = () => {
  progress.value = Math.max(progress.value - 10, 0);
};
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <span class="text-sm text-content-text-secondary">Determinate ({{ progress }}%)</span>
        <ProgressBar :value="progress" color="primary" :show-value="true" />
      </div>

      <div class="flex flex-col gap-2">
        <span class="text-sm text-content-text-secondary">Indeterminate</span>
        <ProgressBar mode="indeterminate" color="secondary" />
      </div>

      <div class="flex gap-2">
        <Button label="-10" size="sm" variant="outlined" @click="decrement" />
        <Button label="+10" size="sm" @click="increment" />
      </div>
    </div>
  </DocumentExampleSection>
</template>
