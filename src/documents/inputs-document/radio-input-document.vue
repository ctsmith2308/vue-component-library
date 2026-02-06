<script setup lang="ts">
import { ref } from 'vue'
import { RadioInputGroup } from '@/components/inputs';
import { DocumentPanel } from '@/components/panels'

const codeSnippet = ref(
  `<TextInput />`
)

const groupName = 'ContactInfo'

const radioInputs = ref([
  {
    groupName,
    id: 'option1',
    value: 'Home',
    label: 'Home'
  },
  {
    groupName,
    id: 'option2',
    value: 'Cell',
    label: 'Cell'
  },
  {
    groupName,
    id: 'option3',
    value: 'Other',
    label: 'Other'
  },
])
</script>

<template>
  <DocumentPanel header="Radio Input" :code-snippet="codeSnippet">
    <RadioInputGroup :radio-inputs="radioInputs"/>
  </DocumentPanel>
</template>
