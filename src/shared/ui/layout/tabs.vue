<script setup lang="ts">
import { ref, computed } from 'vue';

interface Tab {
  header: string;
  content?: string;
  disabled?: boolean;
  icon?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  activeIndex?: number;
}

const props = withDefaults(defineProps<TabsProps>(), {
  activeIndex: 0,
});

const emit = defineEmits<{
  tabChange: [index: number];
}>();

const activeTab = ref(props.activeIndex);

const selectTab = (index: number) => {
  if (props.tabs[index]?.disabled) return;
  
  activeTab.value = index;
  emit('tabChange', index);
};

const isActive = (index: number) => activeTab.value === index;
</script>

<template>
  <div class="tabs w-full">
    <!-- Tab Headers -->
    <div class="tab-headers flex border-b border-surface-border overflow-x-auto">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        type="button"
        :class="[
          'tab-header px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2',
          {
            'text-brand border-b-2 border-brand': isActive(index),
            'text-content-text-secondary hover:text-content-text hover:bg-surface-alt': !isActive(index) && !tab.disabled,
            'opacity-50 cursor-not-allowed': tab.disabled,
            'cursor-pointer': !tab.disabled,
          }
        ]"
        @click="selectTab(index)"
        :disabled="tab.disabled"
        :aria-selected="isActive(index)"
        role="tab"
      >
        <span v-if="tab.icon" class="flex items-center">
          <slot :name="`header-icon-${index}`" :tab="tab" :index="index">
            <slot name="icon" :tab="tab" :index="index"></slot>
          </slot>
        </span>
        <span>
          <slot :name="`header-${index}`" :tab="tab" :index="index">
            {{ tab.header }}
          </slot>
        </span>
      </button>
    </div>

    <!-- Tab Content -->
    <div class="tab-content bg-surface p-4">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        v-show="isActive(index)"
        role="tabpanel"
      >
        <slot :name="`content-${index}`" :tab="tab" :index="index">
          {{ tab.content }}
        </slot>
      </div>
    </div>
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
