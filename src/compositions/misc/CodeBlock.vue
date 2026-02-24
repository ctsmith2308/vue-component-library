<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from '@/lib/composables';

import { VCodeBlock } from '@wdns/vue-code-block';

defineProps<{
  codeSnippet: string;
}>();

const { isDark } = useTheme();

const codeBlockTheme = computed(() => {
  return isDark.value ? 'github-dark' : 'github-dark-dimmed';
});
</script>

<template>
  <div class="overflow-x-auto border border-surface-border rounded-lg">
    <VCodeBlock :code="codeSnippet" highlightjs lang="javascript" :theme="codeBlockTheme" />
  </div>
</template>
