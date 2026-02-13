<script setup lang="ts">
import { ref } from 'vue';

import type { TabsProps } from './types';

import TabList from './TabList.vue';
import TabItem from './TabItem.vue';
import TabPanels from './TabPanels.vue';
import TabPanel from './TabPanel.vue';

const props = withDefaults(defineProps<TabsProps>(), {
  activeIndex: 0,
});

const activeTab = ref(props.activeIndex);

const isActive = (index: number) => activeTab.value === index;

const selectTab = (index: number) => {
  if (props.tabs[index]?.disabled) return;

  activeTab.value = index;
};
</script>

<template>
  <div class="tabs w-full">
    <TabList>
      <TabItem v-for="(tab, idx) in tabs" :key="idx" :tab-idx="idx" :is-selected="isActive(idx)" @select-tab="selectTab">
        {{ tab.header }}
      </TabItem>
    </TabList>

    <TabPanels>
      <TabPanel v-for="(tabItem, idx) in tabs" v-show="isActive(idx)" :key="idx" :tab-component="tabItem.compontent" />
    </TabPanels>
  </div>
</template>

<style scoped>
.tab-headers {
  scrollbar-width: thin;
  scrollbar-color: var(--color-brand-secondary-lighter) transparent;
}

.tab-headers::-webkit-scrollbar {
  height: 4px;
}

.tab-headers::-webkit-scrollbar-track {
  background: transparent;
}

.tab-headers::-webkit-scrollbar-thumb {
  background: var(--color-brand-secondary-lighter);
  border-radius: 2px;
}

@media (max-width: 640px) {
  .tab-header {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }

  .tab-content {
    padding: 1rem;
  }
}
</style>
