<script setup lang="ts">
import { defineComponent, h } from 'vue';

import { toHtmlHighlight } from '@/lib/utils';

import { type Tab, Tabs } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';

const heading = 'Basic';
const description = `Each tab requires a header string and a component. The activeIndex prop sets the initially selected tab.`;
const htmlString = toHtmlHighlight(description, 'activeIndex');
const codeSnippet = `<Tabs :tabs="tabs" :active-index="0" />`;

const OverviewPanel = defineComponent({
  render: () => h('div', { class: 'p-4 text-content-text' }, 'Overview panel — swap in any Vue component here.'),
});
const DetailsPanel = defineComponent({
  render: () => h('div', { class: 'p-4 text-content-text' }, 'Details panel — charts, forms, tables, etc.'),
});
const SettingsPanel = defineComponent({
  render: () => h('div', { class: 'p-4 text-content-text' }, 'Settings panel — preferences and configuration.'),
});
const DisabledPanel = defineComponent({
  render: () => h('div', { class: 'p-4 text-content-text-secondary italic' }, 'This tab is disabled.'),
});

const tabs: Tab[] = [
  { header: 'Overview', component: OverviewPanel },
  { header: 'Details', component: DetailsPanel },
  { header: 'Settings', component: SettingsPanel },
  { header: 'Disabled', component: DisabledPanel, disabled: true },
];
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full">
      <Tabs :tabs="tabs" :active-index="0" />
    </div>
  </DocumentExampleSection>
</template>
