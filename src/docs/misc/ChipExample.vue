<script setup lang="ts">
import { ref } from 'vue';
import { Chip } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Chip';

const description = `Chips are compact elements that represent input, attributes, or actions. Use removable for dismissible chips.`;

const htmlString = toHtmlHighlight(description, 'removable');

const codeSnippet = `
  <Chip label="Vue 3" color="primary" />
  <Chip label="Removable" color="secondary" :removable="true" @remove="handleRemove" />

`;

const colors = ['primary', 'secondary', 'success', 'danger'] as const;

const chips = ref(['Vue 3', 'TypeScript', 'Tailwind', 'Vite', 'Pinia']);

const removeChip = (label: string) => {
  chips.value = chips.value.filter((c) => c !== label);
};
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex flex-col gap-4 w-full">
      <div class="flex gap-2 flex-wrap justify-center">
        <Chip v-for="color in colors" :key="color" :label="color" :color="color" />
      </div>

      <div class="flex gap-2 flex-wrap justify-center">
        <Chip
          v-for="chip in chips"
          :key="chip"
          :label="chip"
          color="primary"
          :removable="true"
          @remove="removeChip(chip)"
        />
        <span v-if="chips.length === 0" class="text-sm text-content-text-secondary italic">All chips removed</span>
      </div>
    </div>
  </DocumentExampleSection>
</template>
