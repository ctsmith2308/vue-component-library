<script setup lang="ts">
import { ref } from 'vue';

import { TheHeader } from '@/compositions/header';
import { TheFooter } from '@/compositions/footer';
import { DocumentNavigation } from '@/compositions/document';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<!-- TODO: Fix snappy sidebar open/close transtition -->
<template>
  <TheHeader @toggle-sidebar-display="toggleSidebar" />

  <main class="flex flex-row px-10 bg-page lg:px-20">
    <aside
      :class="[
        'fixed top-15 left-0 h-screen w-64 overflow-y-auto shrink-0 z-91 shadow-lg bg-page',
        'transition-transform duration-300 ease-in-out',
        'md:sticky md:translate-x-0 md:shadow-none',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <DocumentNavigation />
    </aside>

    <div class="flex w-screen">
      <RouterView />
    </div>
  </main>

  <TheFooter />
</template>
