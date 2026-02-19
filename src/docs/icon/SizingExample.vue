<script setup lang="ts">
import { Icon } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Sizing';

const description = `Icon fills its parent — control dimensions by wrapping it in a sized container.`;

const htmlString = toHtmlHighlight(description, 'Icon');

const codeSnippet = `<div class="size-4"><Icon iconType="SunIcon" /></div>

<div class="size-6"><Icon iconType="SunIcon" /></div>

<div class="size-8"><Icon iconType="SunIcon" /></div>

<div class="size-12"><Icon iconType="SunIcon" /></div>
`;

const sizes = [
  { label: 'w-4 h-4', key: 'sm' },
  { label: 'w-5 h-5', key: 'md' },
  { label: 'w-6 h-6', key: 'lg' },
  { label: 'w-8 h-8', key: 'xl' },
] as const;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex items-end gap-6">
      <div v-for="s in sizes" :key="s.label" class="flex flex-col items-center gap-2">
        <Icon iconType="SunIcon" :size="s.key" class="text-content-text" />

        <span class="text-xs text-content-text-secondary font-mono">{{ s.label }}</span>
      </div>
    </div>
  </DocumentExampleSection>
</template>
