<script setup lang="ts">
import type { ApiSection, PropsTableData, SlotsTableData } from './types';

import { DataTable } from '@/blocks';
import { DocLayout } from '@/compositions/docs';
import { useScrollToSection } from '@/lib/composables/useScrollToSection';

defineProps<{
  sections: ApiSection<PropsTableData | SlotsTableData>[];
}>();

const { scrollToSection } = useScrollToSection({ updateUrl: true });

const onRowClick = () => {
  console.log('clicked');
};
</script>

<template>
  <DocLayout>
    <div v-for="section in sections" :key="section.id" :id="section.id">
      <h1>{{ section.label }}</h1>
      <DataTable :data="section.data" :columns="section.columns" @rowClick="onRowClick" />
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

<style scoped>
.quick-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.quick-nav-item {
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 4px;
}

.quick-nav-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
