<script setup lang="ts">
import { type ExampleSection, useScrollToSection } from '@/lib/composables';

import DocLayout from './DocLayout.vue';

const { scrollToSection } = useScrollToSection({ updateUrl: true });

defineProps<{
  sections: ExampleSection[];
}>();
</script>

<template>
  <DocLayout>
    <div v-for="section in sections" :key="section.id" :id="section.id">
      <component :is="section.component" />
    </div>

    <template #quick-nav>
      <ul class="quick-nav-list">
        <li v-for="section in sections" :key="section.id" class="quick-nav-item" @click="scrollToSection(section.id)">
          {{ section.label }}
        </li>
      </ul>
    </template>
  </DocLayout>
</template>
