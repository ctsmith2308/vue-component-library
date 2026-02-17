<script setup lang="ts">
import { type ExampleSection, useScrollToSection } from '@/lib/composables';

import { DocTabPanel } from '@/compositions/docs';

const { scrollToSection } = useScrollToSection({ updateUrl: true });

defineProps<{
  sections: ExampleSection[];
}>();
</script>

<template>
  <DocTabPanel>
    <div v-for="section in sections" :key="section.id" :id="section.id">
      <component :is="section.component" />
    </div>

    <template #quick-nav>
      <ul>
        <li v-for="section in sections" :key="section.id" @click="scrollToSection(section.id)">
          {{ section.label }}
        </li>
      </ul>
    </template>
  </DocTabPanel>
</template>
