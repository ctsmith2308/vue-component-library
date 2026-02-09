<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import { componentRegistry } from '@/widgets/component-sidebar';
import { Showcase } from '@/shared/ui';
import DocsLayout from '@/app/layouts/docs-layout.vue';

const route = useRoute();

// Look up the component config based on route param
const componentConfig = computed(() => {
  return componentRegistry.find((r) => r.name === route.params.componentName);
});

// Dynamically load the examples component
const ExamplesComponent = computed(() => {
  if (!componentConfig.value) return null;
  return defineAsyncComponent(componentConfig.value.examplesComponent);
});
</script>

<template>
  <DocsLayout>
    <div v-if="componentConfig && ExamplesComponent">
      <Showcase :title="componentConfig.label" :description="componentConfig.description">
        <component :is="ExamplesComponent" />
      </Showcase>
    </div>

    <div v-else class="not-found">
      <h2>Component not found</h2>
      <p>The component "{{ route.params.componentName }}" doesn't exist.</p>
    </div>
  </DocsLayout>
</template>
