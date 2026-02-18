<script setup lang="ts">
import { ref } from 'vue';
import { TextAreaInput } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Text Area Input';

const description = `Use the v-model property for two-way value binding.`;

const htmlString = toHtmlHighlight(description, 'v-model');

const codeSnippet = `<TextAreaInput v-model="username"/>`;

const textAreaData = ref({ id: 'reviews', name: 'reviewFeedback' });

const feedback = ref('');
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <TextAreaInput :id="textAreaData.id" :name="textAreaData.name" v-model="feedback" />
  </DocumentExampleSection>
</template>
