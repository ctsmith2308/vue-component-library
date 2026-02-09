<script setup lang="ts">
import { ref } from 'vue';

import { ToggleSwitch, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
   <ToggleSwitch v-model="enabled" label="Enable notifications" size="md" labelPosition="right" />
  `);

const enabled = ref<boolean>(false);
</script>

<template>
  <ShowcaseSection title="Toggle Switch">
    <template #examples>
      <ToggleSwitch v-model="enabled" label="Enable notifications" size="md" labelPosition="right" />
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
