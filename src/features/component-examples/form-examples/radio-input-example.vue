<script setup lang="ts">
import { ref } from 'vue';

import { RadioInput, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

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
  <ShowcaseSection title="Radio Input">
    <template #examples>
      <div class="flex flex-row gap-6">
        <RadioInput v-for="(input, idx) in radioInputs" :key="idx" :input="input" />
      </div>
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
