<script setup lang="ts">
import { computed } from 'vue';

import { Card, CodeBlock } from '@/blocks';

interface Demo {
  title: string;
  description: string;
  keyword?: string;
  codeSnippet?: string;
}

const props = defineProps<{ content: Demo }>();

const formattedDescription = computed(() => {
  if (props.content.keyword) {
    const regex = new RegExp(`(${props.content.keyword})`);

    return props.content.description.replace(regex, `<span class="highlight">${props.content.keyword}</span>`);
  }

  return props.content.description;
});
</script>

<template>
  <section class="flex flex-col gap-5 overflow-hidden">
    <h2 class="text-lg font-bold text-content-text">
      {{ content.title }}
    </h2>

    <h3 class="text-md text-content-text-secondary" v-html="formattedDescription" />

    <Card>
      <div class="flex flex-row gap-8 items-center justify-center">
        <slot />
      </div>
    </Card>

    <CodeBlock v-if="content.codeSnippet" :code-snippet="content.codeSnippet" />
  </section>
</template>
