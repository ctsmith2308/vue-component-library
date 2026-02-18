<script setup lang="ts">
import { ref } from 'vue';
import { ToggleSwitch } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Basic';
const description = `Use v-model for two-way boolean binding. Control size, label position, and disabled state.`;
const htmlString = toHtmlHighlight(description, 'v-model');
const codeSnippet = `<ToggleSwitch v-model="enabled" label="Enable notifications" />

<ToggleSwitch v-model="leftLabel" label="Label on left" label-position="left" />

<ToggleSwitch v-model="disabled" label="Disabled" :disabled="true" />

<ToggleSwitch v-model="sizes.sm" label="Small" size="sm" />

<ToggleSwitch v-model="sizes.md" label="Medium" size="md" />

<ToggleSwitch v-model="sizes.lg" label="Large" size="lg" />
`;

const basic = ref(false);
const leftLabel = ref(true);
const disabled = ref(false);
const sizes = ref({ sm: false, md: true, lg: false });
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex flex-col gap-4 w-full">
      <ToggleSwitch v-model="basic" label="Basic toggle" />

      <ToggleSwitch v-model="leftLabel" label="Label on left" label-position="left" />

      <ToggleSwitch v-model="disabled" label="Disabled" :disabled="true" />

      <div class="flex gap-6 flex-wrap">
        <ToggleSwitch v-model="sizes.sm" label="Small" size="sm" />
        <ToggleSwitch v-model="sizes.md" label="Medium" size="md" />
        <ToggleSwitch v-model="sizes.lg" label="Large" size="lg" />
      </div>
    </div>
  </DocumentExampleSection>
</template>
