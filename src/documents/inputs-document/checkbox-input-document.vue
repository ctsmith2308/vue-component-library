<script setup lang="ts">
import { ref } from 'vue';
import { CheckboxInput } from '@/components/inputs';
import { DocumentPanel } from '@/components/panels';

const codeSnippet = ref(`const checkboxInputData = { id: 'item1', name: 'todos', label: 'do homework', checked: true }

<CheckboxInput :data="checkboxInputData" />
`);

const data = ref([
  { id: 'item1', name: 'todos', label: 'do homework', checked: true },
  { id: 'item2', name: 'todos', label: 'wash dishes', checked: true },
  { id: 'item3', name: 'todos', label: 'pay bills', checked: true },
]);
</script>

<template>
  <DocumentPanel header="Checkbox Input" :code-snippet="codeSnippet">
    <CheckboxInput v-for="(input, idx) in data" :key="idx" :data="input" />
  </DocumentPanel>
</template>
