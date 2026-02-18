<script setup lang="ts">
import { type SelectData, SelectInput } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Select Input';

const description = `SelectInput renders a custom accessible dropdown. Pass a data object with id, name, label, and options.`;

const htmlString = toHtmlHighlight(description, 'data');

const codeSnippet = `
  <SelectInput :data="selectData" />

`;

const selectData: SelectData = {
  id: 'framework-select',
  name: 'framework',
  label: 'Framework',
  options: [
    { value: 'vue', displayValue: 'Vue 3' },
    { value: 'react', displayValue: 'React' },
    { value: 'angular', displayValue: 'Angular' },
    { value: 'svelte', displayValue: 'Svelte' },
  ],
};
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full max-w-xs">
      <SelectInput :data="selectData" />
    </div>
  </DocumentExampleSection>
</template>
