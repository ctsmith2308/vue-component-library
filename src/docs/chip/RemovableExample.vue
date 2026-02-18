<script setup lang="ts">
import { ref } from 'vue';
import { Chip } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';
const heading = 'Removable';
const description = `Set removable to show a dismiss button. Listen to the remove event to update state.`;
const htmlString = toHtmlHighlight(description, 'removable');
const codeSnippet = `
  <Chip label="Vue 3" :removable="true" @remove="removeChip('Vue 3')" />
`;
const chips = ref(['Vue 3', 'TypeScript', 'Tailwind', 'Vite', 'Pinia']);
const removeChip = (label: string) => { chips.value = chips.value.filter(c => c !== label); };
</script>
<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex gap-2 flex-wrap justify-center min-h-8">
      <Chip
        v-for="chip in chips" :key="chip"
        :label="chip" color="primary" :removable="true"
        @remove="removeChip(chip)"
      />
      <span v-if="chips.length === 0" class="text-sm text-content-text-secondary italic">All chips removed</span>
    </div>
  </DocumentExampleSection>
</template>