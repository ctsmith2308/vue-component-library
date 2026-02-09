<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { componentsByCategory } from '../model';

const route = useRoute();
const router = useRouter();

const navigateToComponent = (componentName: string) => {
  router.push(`/${componentName}`);
};

const isActive = (componentName: string) => {
  return route.params.componentName === componentName || route.name === componentName;
};
</script>

<template>
  <aside class="sidebar">
    <nav class="sidebar-nav">
      <div v-for="(components, category) in componentsByCategory" :key="category" class="category-group">
        <h3 class="category-title">{{ category }}</h3>
        <ul class="component-list">
          <li
            v-for="component in components"
            :key="component.name"
            :class="{ active: isActive(component.name) }"
            @click="navigateToComponent(component.name)"
          >
            {{ component.label }}
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 300px;
  background: #ffffff;
  border-right: 1px solid #e9ecef;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e9ecef;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: #007bff;
  margin: 0;
  cursor: pointer;
  transition: opacity 0.2s;
}

.logo:hover {
  opacity: 0.8;
}

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
