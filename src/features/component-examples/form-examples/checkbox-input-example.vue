<script setup lang="ts">
import { ref } from 'vue';
import { CheckboxInput, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

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
  <ShowcaseSection title="Checkbox Input">
    <template #examples>
      <CheckboxInput v-for="(input, idx) in data" :key="idx" :data="input" />
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
