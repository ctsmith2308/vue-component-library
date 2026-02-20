<script setup lang="ts">
import { ref } from 'vue';

import { Drawer, Text } from '@/blocks';

import { TheHeader } from '@/compositions/header';
import { TheFooter } from '@/compositions/footer';
import { DocumentNavigation } from '@/compositions/document';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  if (window.innerWidth >= 768) return;

  isSidebarOpen.value = !isSidebarOpen.value;
};

const onCloseSidebar = () => {
  isSidebarOpen.value = false;
};
</script>

<template>
  <TheHeader @toggle-sidebar-display="toggleSidebar" />

  <main class="flex flex-row md:px-10 bg-page lg:px-20">
    <!-- Mobile: Drawer -->
    <Drawer :is-open="isSidebarOpen" position="left" size="sm" @close="onCloseSidebar">
      <template #header>
        <Text>LOGO</Text>
      </template>

      <DocumentNavigation />
    </Drawer>

    <!-- Desktop: Static sidebar -->
    <aside class="hidden md:block sticky top-15 h-screen w-64 shrink-0 overflow-y-auto">
      <DocumentNavigation />
    </aside>

    <div class="flex w-screen">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in" :duration="{ enter: 150, leave: 150 }">
          <!-- Add a key to force transitions when staying on the same route with different params -->
          <component :is="Component" :key="$route.path" />
        </transition>
      </RouterView>
    </div>
  </main>

  <TheFooter />
</template>
