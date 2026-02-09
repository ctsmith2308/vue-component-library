<script setup lang="ts">
import { ref } from 'vue';

import { Accordion, ShowcaseSection } from '@/shared/ui';
import type { AccordionTab } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
   <Accordion :tabs="tabs" :multiple="true" :activeIndex="[0]" @tabOpen="handleTabOpen" @tabClose="handleTabClose">
    <!-- Custom header -->
    <template #header-0="{ tab }">
      <strong>{{ tab.header }}</strong>
    </template>

    <!-- Custom content -->
    <template #content-1="{ tab }">
      <div>{{ tab.content }}</div>
    </template>
  </Accordion>
  `);

const tabs: AccordionTab[] = [
  { header: 'Section 1', content: 'Content for section 1' },
  { header: 'Section 2', content: 'Content for section 2' },
  { header: 'Disabled', content: 'This is disabled', disabled: true },
];

const handleTabOpen = (index: number): void => {
  console.log('Opened:', index);
};

const handleTabClose = (index: number): void => {
  console.log('Closed:', index);
};
</script>

<template>
  <ShowcaseSection title="Accordion">
    <template #examples>
      <Accordion :tabs="tabs" :multiple="true" :activeIndex="[0]" @tabOpen="handleTabOpen" @tabClose="handleTabClose">
        <!-- Custom header -->
        <template #header-0="{ tab }">
          <strong>{{ tab.header }}</strong>
        </template>

        <!-- Custom content -->
        <template #content-1="{ tab }">
          <div>{{ tab.content }}</div>
        </template>
      </Accordion>
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>

  <Accordion :tabs="tabs" :multiple="true" :activeIndex="[0]" @tabOpen="handleTabOpen" @tabClose="handleTabClose">
    <!-- Custom header -->
    <template #header-0="{ tab }">
      <strong>{{ tab.header }}</strong>
    </template>

    <!-- Custom content -->
    <template #content-1="{ tab }">
      <div>{{ tab.content }}</div>
    </template>
  </Accordion>
</template>
