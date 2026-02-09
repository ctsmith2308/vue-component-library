<script setup lang="ts">
import { ref } from 'vue';

import { SelectInput, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`const selectInputData = {
  name: 'countries',
  label: 'Countries',
  id: 'country-select',
  options: [
    { value: 'usa', displayValue: 'USA' },
    { value: 'mexico', displayValue: 'Mexico' },
    { value: 'canada', displayValue: 'Canada' },
    { value: 'china', displayValue: 'China' },
  ],
}

<SelectInput :data="selectionData" />
`);

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
  <ShowcaseSection title="Select Input">
    <template #examples>
      <SelectInput :data="selectionData" />
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
