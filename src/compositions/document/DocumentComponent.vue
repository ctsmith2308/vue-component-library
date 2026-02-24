<script setup lang="ts">
import { type Component } from 'vue';
import { Heading, Text } from '@/blocks';
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
    <div class="flex-1 flex flex-col min-w-0 gap-10 p-5 bg-page">
      <component v-for="section in documentSections" :key="section.id" :id="section.id" :is="section.component" />
    </div>

    <div class="w-1/6 hidden md:block bg-page">
      <div class="flex flex-col pt-5 justify-start gap-2 bg-page">
        <Heading :size="4">Content</Heading>

        <ul>
          <li
            v-for="section in documentSections"
            :key="section.id"
            @click="scrollToSection(section.id)"
            class="cursor-pointer"
          >
            <Text>{{ section.label }}</Text>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
