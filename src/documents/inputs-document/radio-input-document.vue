<script setup lang="ts">
import { ref } from 'vue';

import { RadioInput } from '@/components/inputs';
import { DocumentPanel } from '@/components/panels';

const codeSnippet = ref(`const inputData = {
  groupName,
  id: 'option1',
  value: 'Home',
  label: 'Home',
}

<RadioInput :input="inputData" />
`);

const groupName = 'ContactInfo';

const radioInputs = ref([
  {
    groupName,
    id: 'option1',
    value: 'Home',
    label: 'Home',
  },
  {
    groupName,
    id: 'option2',
    value: 'Cell',
    label: 'Cell',
  },
  {
    groupName,
    id: 'option3',
    value: 'Other',
    label: 'Other',
  },
]);
</script>

<template>
  <DocumentPanel header="Radio Input" :code-snippet="codeSnippet">
    <div class="flex flex-row gap-6">
      <RadioInput v-for="(input, idx) in radioInputs" :key="idx" :input="input" />
    </div>
  </DocumentPanel>
</template>
