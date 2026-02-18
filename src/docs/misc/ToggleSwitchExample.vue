<script setup lang="ts">
import { ref } from 'vue';
import { ToggleSwitch } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Toggle Switch';

const description = `Use v-model for two-way binding. Control size, label position, and disabled state.`;

const htmlString = toHtmlHighlight(description, 'v-model');

const codeSnippet = `
  <ToggleSwitch v-model="enabled" label="Enable notifications" />

`;

const basic = ref(false);
const leftLabel = ref(true);
const disabled = ref(false);
const sizes = ref({ sm: false, md: true, lg: false });
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex flex-col gap-5 w-full">
      <ToggleSwitch v-model="basic" label="Basic toggle" />
      <ToggleSwitch v-model="leftLabel" label="Label on left" label-position="left" />
      <ToggleSwitch v-model="disabled" label="Disabled" :disabled="true" />

      <div class="flex gap-6 flex-wrap">
        <div class="flex flex-col items-start gap-1">
          <ToggleSwitch v-model="sizes.sm" label="Small" size="sm" />
        </div>
        <div class="flex flex-col items-start gap-1">
          <ToggleSwitch v-model="sizes.md" label="Medium" size="md" />
        </div>
        <div class="flex flex-col items-start gap-1">
          <ToggleSwitch v-model="sizes.lg" label="Large" size="lg" />
        </div>
      </div>
    </div>
  </DocumentExampleSection>
</template>
