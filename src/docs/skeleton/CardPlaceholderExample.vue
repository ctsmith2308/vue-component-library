<script setup lang="ts">
import { ref } from 'vue';
import { Skeleton, Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Card Placeholder';

const description = `Compose multiple Skeleton elements to mirror the layout of real content while it loads.`;

const htmlString = toHtmlHighlight(description, 'Skeleton');

const codeSnippet = `<div class="flex gap-3 items-start">

  <Skeleton shape="circle" size="2.5rem" />

  <div class="flex flex-col gap-2 flex-1">
    <Skeleton height="0.75rem" width="55%" />

    <Skeleton height="0.75rem" width="35%" />
  </div>
</div>
`;

const loaded = ref(false);

const toggle = () => {
  loaded.value = !loaded.value;
};
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full flex flex-col gap-4">
      <Button :label="loaded ? 'Show Skeleton' : 'Show Content'" variant="outlined" @click="toggle" />

      <div v-if="!loaded" class="flex flex-col gap-4 w-full max-w-sm">
        <div v-for="i in 3" :key="i" class="flex gap-3 items-start">
          <Skeleton shape="circle" size="2.5rem" />
          <div class="flex flex-col gap-2 flex-1">
            <Skeleton height="0.75rem" :width="`${55 + i * 5}%`" />
            <Skeleton height="0.75rem" :width="`${30 + i * 3}%`" />
          </div>
        </div>
      </div>

      <div v-else class="flex flex-col gap-4 w-full max-w-sm">
        <div v-for="i in 3" :key="i" class="flex gap-3 items-start">
          <div
            class="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white text-sm font-semibold shrink-0"
          >
            {{ String.fromCharCode(64 + i) }}
          </div>

          <div>
            <p class="font-medium text-content-text text-sm">User {{ i }}</p>
            <p class="text-xs text-content-text-secondary">user{{ i }}@example.com</p>
          </div>
        </div>
      </div>
    </div>
  </DocumentExampleSection>
</template>
