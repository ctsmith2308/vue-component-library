<script setup lang="ts">
import { VCodeBlock } from '@wdns/vue-code-block';

defineProps<{
  codeSnippet: string;
}>();
</script>

<template>
  <VCodeBlock :code="codeSnippet" highlightjs lang="javascript" theme="qtcreator-dark" />
</template>
