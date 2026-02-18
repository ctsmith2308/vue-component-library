<script setup lang="ts">
import { Avatar } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Avatar';

const description = `The Avatar component renders initials, an image, or a custom icon slot. Control size and shape.`;

const htmlString = toHtmlHighlight(description, 'Avatar');

const codeSnippet = `
  <Avatar label="Alice Johnson" size="md" shape="circle" />
  <Avatar src="https://..." size="lg" shape="circle" />

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

      <div class="flex items-center gap-4 flex-wrap justify-center">
        <div class="flex flex-col items-center gap-2">
          <Avatar label="John Doe" size="lg" shape="circle" />
          <span class="text-xs text-content-text-secondary">Circle</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Avatar label="Jane Smith" size="lg" shape="square" />
          <span class="text-xs text-content-text-secondary">Square</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Avatar src="https://picsum.photos/seed/avatar/64/64" size="lg" shape="circle" alt="User avatar" />
          <span class="text-xs text-content-text-secondary">Image</span>
        </div>
      </div>
    </div>
  </DocumentExampleSection>
</template>
