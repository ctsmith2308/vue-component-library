<script setup lang="ts">
import { ref } from 'vue';

import { Fieldset, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
    <Fieldset legend="User Information" :toggleable="true" :collapsed="false">
    <p>Fieldset content goes here</p>
  </Fieldset>
  `);
</script>

<template>
  <ShowcaseSection title="Fieldset">
    <template #examples>
      <Fieldset legend="User Information" :toggleable="true" :collapsed="false">
        <p>Fieldset content goes here</p>
      </Fieldset>
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
