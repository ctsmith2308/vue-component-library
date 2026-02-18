<script setup lang="ts">
import { Avatar } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';
const heading = 'Basic';
const description = `Avatar derives initials from the label prop. Use the image prop to render a photo instead.`;
const htmlString = toHtmlHighlight(description, 'label');
const codeSnippet = `
  <Avatar label="Alice Johnson" size="md" />
  <Avatar src="https://..." size="md" />
`;
const sizes = ['sm', 'md', 'lg', 'xl'] as const;
</script>
<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex flex-col gap-6 items-center w-full">
      <div class="flex items-end gap-4 flex-wrap justify-center">
        <div v-for="size in sizes" :key="size" class="flex flex-col items-center gap-2">
          <Avatar :label="`${size.toUpperCase()} User`" :size="size" shape="circle" />
          <span class="text-xs text-content-text-secondary">{{ size }}</span>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex flex-col items-center gap-1">
          <Avatar label="Jane Doe" size="lg" shape="circle" />
          <span class="text-xs text-content-text-secondary">Circle</span>
        </div>
        <div class="flex flex-col items-center gap-1">
          <Avatar label="Jane Doe" size="lg" shape="square" />
          <span class="text-xs text-content-text-secondary">Square</span>
        </div>
        <div class="flex flex-col items-center gap-1">
          <Avatar src="https://picsum.photos/seed/avatar/64/64" size="lg" shape="circle" />
          <span class="text-xs text-content-text-secondary">Image</span>
        </div>
      </div>
    </div>
  </DocumentExampleSection>
</template>