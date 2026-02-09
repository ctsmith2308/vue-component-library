<script setup lang="ts">
import { ref } from 'vue';

import { TextAreaInput, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`<TextAreaInput id="sample-id" :name="sample-name" />`);

const textAreaData = ref({ id: 'reviews', name: 'reviewFeedback' });
</script>

<template>
  <ShowcaseSection title="Textarea">
    <template #examples>
      <TextAreaInput :id="textAreaData.id" :name="textAreaData.name" />
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
