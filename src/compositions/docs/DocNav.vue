<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

import { docRoutesConfig, organizeRoutesByCategory } from '@/router';

const route = useRoute();
const router = useRouter();

const navigateToComponent = (componentName: string) => {
  router.push(`/${componentName}`);
};

const isActive = (componentName: string) => {
  return route.params.componentName === componentName || route.name === componentName;
};

const navigationList = organizeRoutesByCategory(docRoutesConfig);
</script>

<template>
  <nav class="sidebar-nav">
    <div v-for="(route, idx) in navigationList" :key="idx" class="category-group">
      <h3 class="category-title">
        {{ route.category }}
      </h3>

      <ul class="component-list">
        <li
          v-for="component in route.components"
          :key="component.name"
          :class="{ active: isActive(component.name) }"
          @click="navigateToComponent(component.name)"
        >
          {{ component.label }}
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
.sidebar-nav {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
}

.category-group {
  margin-bottom: 2rem;
}

.category-group:last-child {
  margin-bottom: 0;
}

.category-title {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #6c757d;
  letter-spacing: 0.5px;
  margin-bottom: 0.75rem;
}

.component-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.component-list li {
  padding: 0.625rem 0.875rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;
  font-size: 0.9375rem;
  color: #495057;
  font-weight: 500;
}

.component-list li:hover {
  background: #f8f9fa;
  color: #007bff;
}

.component-list li.active {
  background: #007bff;
  color: white;
}

.component-list li.active:hover {
  background: #0056b3;
}

/* Scrollbar */
.sidebar-nav::-webkit-scrollbar {
  width: 6px;
}

.sidebar-nav::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-nav::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 3px;
}

.sidebar-nav::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}
</style>
