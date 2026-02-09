<script setup lang="ts">
import { ref } from 'vue';

import { Tabs, type Tab, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
   <Tabs :tabs="tabs" :activeIndex="0" @tabChange="handleTabChange">
    <template #content-0>
      <div>Custom content for tab 1</div>
    </template>
  </Tabs>
  `);

const tabs: Tab[] = [
  { header: 'Tab 1', content: 'Content 1' },
  { header: 'Tab 2', content: 'Content 2', icon: true },
  { header: 'Disabled', disabled: true },
];

const handleTabChange = (index: number): void => {
  console.log('Tab changed:', index);
};
</script>

<template>
  <ShowcaseSection title="Tabs">
    <template #examples>
      <Tabs :tabs="tabs" :activeIndex="0" @tabChange="handleTabChange">
        <template #content-0>
          <div>Custom content for tab 1</div>
        </template>
      </Tabs>
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
