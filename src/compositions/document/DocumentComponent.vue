<script setup lang="ts">
import { type Component } from 'vue';
import { Heading, NavList } from '@/blocks';
import { useScrollToSection } from '@/lib/composables';

interface DocumentSection {
  id: string;
  label: string;
  component: Component;
}

defineProps<{
  documentSections: DocumentSection[];
}>();

const { scrollToSection } = useScrollToSection({ updateUrl: true });
</script>

<template>
  <div class="flex flex-row w-full min-w-0">
    <div class="flex-1 flex flex-col min-w-0 bg-page">
      <component v-for="section in documentSections" :key="section.id" :id="section.id" :is="section.component" />
    </div>

    <div class="w-1/4 hidden md:block bg-page">
      <div class="flex flex-col pt-5 px-10 gap-2 bg-page">
        <Heading :size="3">Content</Heading>

        <NavList :items="documentSections" @select="scrollToSection" />
      </div>
    </div>
  </div>
</template>
