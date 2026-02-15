<script setup lang="ts">
import { ref, computed } from 'vue';
import type { TabsProps } from './types';
import TabItem from './TabItem.vue';

const props = defineProps<TabsProps>();

const activeTabIndex = ref(props.activeIndex ?? 0);

const setActiveTab = (index: number) => {
  if (props.tabs[index] && !props.tabs[index].disabled) {
    activeTabIndex.value = index;
  }
};

const activeTab = computed(() => props.tabs[activeTabIndex.value]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <!-- Tab Headers -->
    <div class="flex border-b border-surface-border">
      <TabItem
        v-for="(tab, index) in tabs"
        :key="index"
        :label="tab.header"
        :is-active="activeTabIndex === index"
        :is-disabled="tab.disabled || false"
        @click="setActiveTab(index)"
      />
    </div>

    <!-- Tab Content (directly rendered, no wrapper component) -->
    <component v-if="activeTab" :is="activeTab.component" role="tabpanel" v-bind="activeTab.props || {}" />
  </div>
</template>
