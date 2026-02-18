<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

import { docRoutesConfig, organizeRoutesByCategory } from '@/router';

import { Text } from '@/blocks';

const route = useRoute();
const router = useRouter();

const navigateToComponent = (componentName: string) => {
  router.push({ name: componentName });
};

const isActive = (componentName: string) => {
  return route.params.componentName === componentName || route.name === componentName;
};

const navigationList = organizeRoutesByCategory(docRoutesConfig);
</script>

<template>
  <nav class="flex flex-col gap-4 p-6 overflow-y-auto">
    <div v-for="(route, idx) in navigationList" :key="idx" class="flex flex-col gap-2">
      <Text>
        {{ route.category }}
      </Text>

      <ul class="list-none p-0 m-0">
        <li
          v-for="component in route.components"
          :key="component.name"
          :class="[
            'py-2.5 px-3.5 cursor-pointer rounded-md transition-all duration-200 text-base font-medium',
            isActive(component.name) ? 'bg-brand text-white hover:bg-blue-700' : 'hover:bg-brand-ghost-hover',
          ]"
          @click="navigateToComponent(component.name)"
        >
          {{ component.label }}
        </li>
      </ul>
    </div>
  </nav>
</template>
