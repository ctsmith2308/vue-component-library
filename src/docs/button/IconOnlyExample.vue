<script setup lang="ts">
import { Button, Icon } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Icon Only';

const description = `Omit label and provide only the icon slot to render a square icon button. The aspect ratio and icon size scale automatically with the size prop.`;

const htmlString = toHtmlHighlight(description, 'icon');

const codeSnippet = `
<Button size="sm" variant="outlined" aria-label="Previous page">
  <template #icon>
    <Icon iconType="ChevronLeftIcon" />
  </template>
</Button>

<Button size="md" aria-label="Next page">
  <template #icon>
    <Icon iconType="ChevronRightIcon" />
  </template>
</Button>

<Button size="lg" variant="ghost" aria-label="Calendar">
  <template #icon>
    <Icon iconType="CalendarDaysIcon" />
  </template>
</Button>
`;

const sizes = ['sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex flex-col gap-6">
      <!-- Sizes -->
      <div class="flex items-end gap-3">
        <div v-for="size in sizes" :key="size" class="flex flex-col items-center gap-2">
          <Button :size="size" :aria-label="`${size} icon button`">
            <template #icon>
              <Icon iconType="ChevronRightIcon" />
            </template>
          </Button>
          <span class="text-xs text-content-text-secondary">{{ size }}</span>
        </div>
      </div>

      <!-- Variants -->
      <div class="flex items-center gap-3">
        <Button size="md" aria-label="Solid">
          <template #icon><Icon iconType="CheckIcon" /></template>
        </Button>

        <Button size="md" variant="outlined" aria-label="Outlined">
          <template #icon><Icon iconType="ChevronLeftIcon" /></template>
        </Button>

        <Button size="md" variant="ghost" aria-label="Ghost">
          <template #icon><Icon iconType="ChevronDoubleLeftIcon" /></template>
        </Button>

        <Button size="md" color="danger" variant="outlined" rounded aria-label="Delete">
          <template #icon><Icon iconType="ArrowLongDownIcon" /></template>
        </Button>
      </div>
    </div>
  </DocumentExampleSection>
</template>
