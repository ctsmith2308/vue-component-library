<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

import { docRoutesConfig, organizeRoutesByCategory } from '@/router';

import { Heading, Text } from '@/blocks';

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
  <nav class="flex flex-col gap-4 p-5 overflow-y-auto">
    <Heading :size="4">Components</Heading>

    <div v-for="(route, idx) in navigationList" :key="idx" class="flex flex-col gap-2">
      <Text tag="section" size="lg">
        {{ route.category }}
      </Text>

      <ul class="flex flex-col list-none p-0 m-0 pl-2 gap-2">
        <li
          v-for="component in route.components"
          :key="component.name"
          :class="[
            'cursor-pointer rounded-md transition-all duration-200 font-medium px-2',
            isActive(component.name)
              ? 'bg-brand-light text-content-text-muted hover:bg-brand-light'
              : 'hover:bg-brand-ghost-hover',
          ]"
          @click="navigateToComponent(component.name)"
        >
          <Text>
            {{ component.label }}
          </Text>
        </li>
      </ul>
    </div>
  </nav>
</template>
