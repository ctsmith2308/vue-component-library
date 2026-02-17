<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/outline';

import { Text } from '@/blocks';

import ThemeToggler from './ThemeToggler.vue';

const emit = defineEmits(['toggleSidebarDisplay']);

const onToggleSidebarDisplay = () => {
  emit('toggleSidebarDisplay');
};
</script>

<template>
  <header
    class="sticky top-0 z-10 flex flex-row justify-between items-center p-5 md:px-10 h-15 border-b border-surface-border bg-page"
  >
    <div class="flex flew-row items-center gap-2 w-250">
      <button class="sidebar-toggle" @click="onToggleSidebarDisplay" aria-label="Toggle sidebar">
        <Bars3Icon class="w-5 h-5" />
      </button>

      <button>
        <Bars3Icon class="w-5 h-5" />
      </button>

      <Text>LOGO</Text>
    </div>

    <div>
      <ThemeToggler />
    </div>
  </header>
</template>

<style>
.sidebar-toggle {
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  color: #495057;
  border-radius: 4px;
  transition: background 0.2s;
}

@media (min-width: 769px) {
  .sidebar-toggle {
    display: none;
  }
}
</style>
