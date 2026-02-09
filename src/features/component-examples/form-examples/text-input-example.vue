<script setup lang="ts">
import { ref } from 'vue';

import { TextInput, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`<TextInput />`);
</script>

<template>
  <ShowcaseSection title="Text Input">
    <template #examples>
      <TextInput placeholder="username" />
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
