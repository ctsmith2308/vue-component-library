<script setup lang="ts">
import { ref } from 'vue';

import { ShowcaseSection, Menubar, type MenuItem } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
    <Menubar :items="items" />
  `);

const items: MenuItem[] = [
  {
    label: 'File',
    items: [{ label: 'New', command: () => console.log('New') }, { label: 'Open', to: '/open' }, { label: 'Quit' }],
  },
  { label: 'Edit' },
  { label: 'View' },
];
</script>

<template>
  <ShowcaseSection title="Menubar">
    <template #examples>
      <Menubar :items="items" />
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
