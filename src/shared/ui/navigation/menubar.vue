<script setup lang="ts">
import { ref } from 'vue';

interface MenuItem {
  label: string;
  icon?: boolean;
  items?: MenuItem[];
  separator?: boolean;
  to?: string;
  command?: () => void;
}

defineProps<{
  items: MenuItem[];
}>();

const activeIndex = ref<number | null>(null);

const toggleMenu = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const closeMenu = () => {
  activeIndex.value = null;
};

const handleItemClick = (item: MenuItem) => {
  if (item.command) {
    item.command();
  }
  closeMenu();
};
</script>

<template>
  <nav class="menubar bg-surface border-b border-surface-border">
    <ul class="flex items-center gap-1 px-2 py-1">
      <li v-for="(item, index) in items" :key="index" class="relative">
        <!-- Top level menu item -->
        <button
          type="button"
          :class="[
            'menu-item px-3 py-2 rounded text-sm font-medium inline-flex items-center gap-2',
            'hover:bg-surface-alt transition-colors',
            { 'bg-surface-alt': activeIndex === index },
          ]"
          @click="item.items ? toggleMenu(index) : handleItemClick(item)"
        >
          <span v-if="item.icon" class="flex items-center">
            <slot :name="`item-icon-${index}`" :item="item">
              <slot name="icon" :item="item"></slot>
            </slot>
          </span>
          <span>{{ item.label }}</span>
          <svg v-if="item.items" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div
          v-if="item.items && activeIndex === index"
          class="absolute top-full left-0 mt-1 bg-surface border border-surface-border rounded-lg shadow-lg min-w-[200px] z-50"
        >
          <ul class="py-1">
            <li v-for="(subItem, subIndex) in item.items" :key="subIndex">
              <hr v-if="subItem.separator" class="my-1 border-surface-border" />
              <component
                v-else
                :is="subItem.to ? 'a' : 'button'"
                :href="subItem.to"
                type="button"
                class="w-full text-left px-4 py-2 text-sm hover:bg-surface-alt transition-colors inline-flex items-center gap-2"
                @click="handleItemClick(subItem)"
              >
                <span v-if="subItem.icon" class="flex items-center">
                  <slot :name="`sub-item-icon-${index}-${subIndex}`" :item="subItem">
                    <slot name="sub-icon" :item="subItem"></slot>
                  </slot>
                </span>
                <span>{{ subItem.label }}</span>
              </component>
            </li>
          </ul>
        </div>
      </li>
    </ul>

    <!-- Overlay to close menu when clicking outside -->
    <div v-if="activeIndex !== null" class="fixed inset-0 z-40" @click="closeMenu"></div>
  </nav>
</template>

<style scoped>
@media (max-width: 640px) {
  .menubar ul {
    font-size: 0.875rem;
    padding: 0.25rem;
  }

  .menu-item {
    padding: 0.5rem 0.75rem;
  }
}
</style>
