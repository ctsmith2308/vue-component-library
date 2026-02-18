<script setup lang="ts">
import { ref } from 'vue';
import type { AccordionTab } from './types';

interface AccordionProps {
  tabs: AccordionTab[];
  multiple?: boolean;
  activeIndex?: number | number[];
}

const props = withDefaults(defineProps<AccordionProps>(), {
  multiple: false,
});

const emit = defineEmits<{
  tabOpen: [index: number];
  tabClose: [index: number];
}>();

const activeIndexes = ref<Set<number>>(
  new Set(Array.isArray(props.activeIndex) ? props.activeIndex : props.activeIndex !== undefined ? [props.activeIndex] : []),
);

const isActive = (index: number) => activeIndexes.value.has(index);

const toggle = (index: number) => {
  if (props.tabs[index]?.disabled) return;

  if (activeIndexes.value.has(index)) {
    activeIndexes.value.delete(index);
    emit('tabClose', index);
  } else {
    if (!props.multiple) {
      activeIndexes.value.clear();
    }
    activeIndexes.value.add(index);
    emit('tabOpen', index);
  }
};

const onEnter = (el: Element) => {
  (el as HTMLElement).style.height = 'auto';
  const height = (el as HTMLElement).offsetHeight;
  (el as HTMLElement).style.height = '0px';
  setTimeout(() => {
    (el as HTMLElement).style.height = height + 'px';
  });
};

const onAfterEnter = (el: Element) => {
  (el as HTMLElement).style.height = 'auto';
};

const onLeave = (el: Element) => {
  (el as HTMLElement).style.height = (el as HTMLElement).offsetHeight + 'px';
  setTimeout(() => {
    (el as HTMLElement).style.height = '0px';
  });
};
</script>

<template>
  <div class="accordion w-full space-y-2">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      class="accordion-tab bg-surface border border-surface-border rounded-lg overflow-hidden"
    >
      <!-- Header -->
      <button
        type="button"
        :class="[
          'accordion-header w-full flex items-center justify-between px-4 py-3 text-left transition-colors',
          {
            'hover:bg-surface-alt cursor-pointer': !tab.disabled,
            'opacity-50 cursor-not-allowed': tab.disabled,
            'bg-surface-alt': isActive(index),
          },
        ]"
        @click="toggle(index)"
        :disabled="tab.disabled"
        :aria-expanded="isActive(index)"
      >
        <span class="font-medium">
          <slot :name="`header-${index}`" :tab="tab" :index="index">
            {{ tab.header }}
          </slot>
        </span>

        <span :class="['transition-transform duration-200', { 'rotate-180': isActive(index) }]">
          <slot name="toggle-icon">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </slot>
        </span>
      </button>

      <!-- Content -->
      <Transition name="accordion" @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave">
        <div v-if="isActive(index)" class="accordion-content overflow-hidden transition-all duration-200">
          <div class="px-4 py-3 border-t border-surface-border">
            <slot :name="`content-${index}`" :tab="tab" :index="index">
              {{ tab.content }}
            </slot>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.accordion-content {
  transition: height 0.2s ease-in-out;
}
</style>
