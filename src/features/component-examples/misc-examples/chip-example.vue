<script setup lang="ts">
import { ref } from 'vue';
import { Chip, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
   <Chip label="Technology" color="primary" :removable="true" @remove="handleRemove" />
  `);

const handleRemove = (): void => {
  console.log('Chip removed');
};
</script>

<template>
  <ShowcaseSection title="Chip">
    <template #examples>
      <Chip label="Technology" color="primary" :removable="true" @remove="handleRemove" />
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
