<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { ComponentSidebar } from '@/widgets/component-sidebar';
const router = useRouter();

const isSidebarOpen = ref(true);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <div class="docs-layout">
    <header class="docs-header">
      <h2 class="logo" @click="router.push('/')">My Component Library</h2>

      <button class="sidebar-toggle" @click="toggleSidebar" aria-label="Toggle sidebar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 12h18M3 6h18M3 18h18" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>
    </header>

    <div class="docs-container">
      <ComponentSidebar :class="['docs-sidebar', { 'sidebar-open': isSidebarOpen }]" />

      <main class="docs-main">
        <div class="docs-content">
          <slot />
        </div>
      </main>
    </div>

    <div v-if="isSidebarOpen" class="sidebar-overlay" @click="toggleSidebar" />
  </div>
</template>

<style scoped>
/* MOBILE FIRST STYLES */
.docs-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.docs-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  position: sticky;
  top: 0;
  z-index: 100;
  justify-content: space-between;
}

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

.sidebar-toggle:hover {
  background: #f8f9fa;
}

.docs-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.docs-container {
  display: flex;
  flex: 1;
  position: relative;
}

.docs-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  overflow-y: auto;
  flex-shrink: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 91;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  background: #fff;
}

.docs-sidebar.sidebar-open {
  transform: translateX(0);
}

.docs-main {
  flex: 1;
  overflow-y: auto;
  background: #fafbfc;
}

.docs-content {
  max-width: 1200px;
  margin: 0 1rem;
  padding: 2rem 0;
}

.sidebar-overlay {
  display: none;
}

/* Show overlay when sidebar is open */
.sidebar-open ~ .sidebar-overlay {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 90;
}

/* DESKTOP OVERRIDES */
@media (min-width: 769px) {
  .docs-container {
    flex-direction: row;
  }

  .sidebar-toggle {
    display: none;
  }

  .docs-sidebar {
    position: sticky;
    transform: none;
    left: 0;
    box-shadow: none;
    width: 250px;
  }

  .sidebar-overlay {
    display: none !important;
  }

  .docs-content {
    margin: 0 2rem;
    padding: 3rem 0;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .docs-content {
    padding: 2.5rem 1.5rem;
  }
}
</style>
