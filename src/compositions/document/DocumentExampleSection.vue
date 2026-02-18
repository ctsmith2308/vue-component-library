<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Heading, CodeBlock, Card, Button, Icon } from '@/blocks';
import { computed } from 'vue';

defineProps<{
  heading: string;
  description: string;
  codeSnippet: string;
  githubLink?: string;
}>();

const route = useRoute();

const currentUrl = computed(() => window.location.origin + route.fullPath);
</script>

<template>
  <section class="flex flex-1 flex-col gap-5 bg-page">
    <div class="flex flex-row items-center justify-between gap-4">
      <Heading :size="3">
        {{ heading }}
      </Heading>

      <Button as="a" :href="currentUrl" variant="ghost">
        <template #icon>
          <Icon iconType="LinkIcon" />
        </template>
      </Button>
    </div>

    <div class="text-content-text-secondary leading-relaxed" v-html="description" />

    <Card>
      <div class="flex flex-row flex-wrap items-center justify-center gap-2 py-2 min-h-24">
        <slot>Example Usage Goes Here!</slot>
      </div>
    </Card>

    <CodeBlock v-if="codeSnippet" :code-snippet="codeSnippet" />
  </section>
</template>
