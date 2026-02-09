<script setup lang="ts">
import { ref } from 'vue';

import { Skeleton, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
    <!-- Rectangle -->
    <Skeleton width="100%" height="4rem" />

    <!-- Circle -->
    <Skeleton shape="circle" size="3rem" />

    <!-- Square with wave animation -->
    <Skeleton shape="square" size="100px" animation="wave" />
  `);
</script>

<template>
  <ShowcaseSection title="Skeleton">
    <template #examples>
      <!-- Rectangle -->
      <Skeleton width="100%" height="4rem" />

      <!-- Circle -->
      <Skeleton shape="circle" size="3rem" />

      <!-- Square with wave animation -->
      <Skeleton shape="square" size="100px" animation="wave" />
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
