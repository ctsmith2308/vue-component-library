<script setup lang="ts">
import SelectInput from '@/blocks/select/SelectInput.vue';
import type { SelectData } from '@/blocks/select/types';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';
const heading = 'Basic';
const description = `Pass a data object with id, name, label, and an options array to drive the dropdown.`;
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