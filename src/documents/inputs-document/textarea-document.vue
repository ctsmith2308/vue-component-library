<script setup lang="ts">
import { ref } from 'vue';

import { TextAreaInput } from '@/components/inputs';
import { DocumentPanel } from '@/components/panels';

const codeSnippet = ref(`<TextAreaInput id="sample-id" :name="sample-name" />`);

const textAreaData = ref({ id: 'reviews', name: 'reviewFeedback' });
</script>

<template>
  <DocumentPanel header="Im the doc header" :code-snippet="codeSnippet">
    <TextAreaInput :id="textAreaData.id" :name="textAreaData.name" />
  </DocumentPanel>
</template>
