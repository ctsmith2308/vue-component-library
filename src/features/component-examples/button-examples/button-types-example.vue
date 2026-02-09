<script setup lang="ts">
import { ref } from 'vue';
import { HeartIcon, Button, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
  <Button label="default" />
  <Button label="loading..." loading />
  <Button label="disabled" disabled />
  <Button label="button link" variant="link" />
  <Button label="rounded" rounded />
  `);
</script>

<template>
  <!-- Button Defaults -->
  <ShowcaseSection title="Button">
    <Button label="default" icon>
      <HeartIcon />
    </Button>

    <template #examples>
      <Button label="loading..." loading />

      <Button label="disabled" disabled />

      <Button label="button link" variant="link" />

      <Button label="rounded" rounded />
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
