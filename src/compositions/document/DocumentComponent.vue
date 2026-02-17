<script setup lang="ts">
import { type Component } from 'vue';

interface DocumentSection {
  id: string;
  label: string;
  component: Component;
}

defineProps<{
  documentSections: DocumentSection[];
}>();

const scrollToSection = () => {
  console.log('scrolling');
};
</script>

<template>
  <div class="flex flex-row w-full min-w-0">
    <div class="flex-1 flex flex-col gap-8 min-w-0">
      <component v-for="section in documentSections" :key="section.id" :id="section.id" :is="section.component" />
    </div>

    <div class="w-1/4 hidden md:block bg-surface">
      <div class="flex flex-col pt-5 px-10 gap-2">
        <h1>Content</h1>

        <ul>
          <li v-for="section in documentSections" :key="section.id" @click="scrollToSection">
            {{ section.label }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
