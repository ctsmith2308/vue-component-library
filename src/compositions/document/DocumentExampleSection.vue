<script setup lang="ts">
import { Heading, CodeBlock, Card } from '@/blocks';

defineProps<{
  heading: string;
  description: string;
  codeSnippet: string;
}>();
</script>

<template>
  <section class="flex flex-1 flex-col gap-5 p-4 bg-page">
    <Heading :size="3">
      {{ heading }}
    </Heading>

    <div class="text-content-text-secondary leading-relaxed" v-html="description" />

    <Card>
      <div class="flex flex-row flex-wrap items-center justify-center gap-2 py-2 min-h-24">
        <slot>Example Usage Goes Here!</slot>
      </div>
    </Card>

    <CodeBlock v-if="codeSnippet" :code-snippet="codeSnippet" />
  </section>
</template>
