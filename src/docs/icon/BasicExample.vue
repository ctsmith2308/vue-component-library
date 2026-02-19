<script setup lang="ts">
import { Icon } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'All Icons';

const description = `Pass any supported iconType string to render the corresponding icon. The icon scales to fill its container.`;

const htmlString = toHtmlHighlight(description, 'iconType');

const codeSnippet = `<div class="size-5">
  <Icon iconType="CheckIcon" />
</div>
`;

const icons = [
  'ChevronDoubleLeftIcon',
  'ChevronDoubleRightIcon',
  'ChevronDownIcon',
  'ChevronLeftIcon',
  'ChevronRightIcon',
  'SunIcon',
  'MoonIcon',
  'Bars3Icon',
  'ArrowLongUpIcon',
  'ArrowLongDownIcon',
  'GithubIcon',
  'LinkIcon',
  'CheckIcon',
  'CalendarDaysIcon',
] as const;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex flex-wrap gap-4">
      <div v-for="icon in icons" :key="icon" class="flex flex-col items-center gap-2">
        <div class="size-6 text-content-text">
          <Icon :iconType="icon" />
        </div>
        <span class="text-xs text-content-text-secondary font-mono">{{ icon }}</span>
      </div>
    </div>
  </DocumentExampleSection>
</template>
