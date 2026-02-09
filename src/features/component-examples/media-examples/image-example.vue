<script setup lang="ts">
import { ref } from 'vue';

import { Image, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
  <Image src="/path/to/image.jpg" alt="Description" :preview="true" width="400px" height="300px" />
  `);
</script>

<template>
  <ShowcaseSection title="Button Colors">
    <template #examples>
      <Image src="/path/to/image.jpg" alt="Description" :preview="true" width="400px" height="300px" />
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
