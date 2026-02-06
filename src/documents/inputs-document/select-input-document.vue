<script setup lang="ts">
import { ref } from 'vue';

import { SelectInput } from '@/components/inputs';
import { DocumentPanel } from '@/components/panels';

const codeSnippet = ref(`<TextInput />`);

const selectionData = ref({
  name: 'countries',
  label: 'Countries',
  id: 'country-select',
  options: [
    { value: 'usa', displayValue: 'USA' },
    { value: 'mexico', displayValue: 'Mexico' },
    { value: 'canada', displayValue: 'Canada' },
    { value: 'china', displayValue: 'China' },
  ],
});
</script>

<template>
  <DocumentPanel header="Select Input" :code-snippet="codeSnippet">
    <SelectInput :data="selectionData" />
  </DocumentPanel>
</template>
