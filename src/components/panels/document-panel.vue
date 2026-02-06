<script setup lang="ts">
import { Card } from '@/components/cards';
import VCodeBlock from '@wdns/vue-code-block';

defineProps<{
  header: string;
  description?: string;
  codeSnippet?: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-4 p-6 rounded-lg bg-white">
    <h3 class="text-2xl">
      {{ header }}
    </h3>

    <p v-if="description" class="text-base/3">
      {{ description }}
    </p>

    <Card>
      <slot />
    </Card>

    <v-code-block v-if="codeSnippet" :code="codeSnippet" />
  </div>
</template>
