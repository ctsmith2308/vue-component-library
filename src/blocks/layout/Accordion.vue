<script setup lang="ts">
import { ref } from 'vue';
import type { AccordionTab } from './types';
import Text from '../typography/Text.vue';
import Icon from '../icon/Icon.vue';

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
  <div class="w-full space-y-2">
    <div v-for="(tab, index) in tabs" :key="index" class="panel">
      <!-- Header -->
      <button
        type="button"
        :class="[
          'accordion-header',
          {
            'accordion-header--disabled': tab.disabled,
            'accordion-header--active': isActive(index),
          },
        ]"
        @click="toggle(index)"
        :disabled="tab.disabled"
        :aria-expanded="isActive(index)"
      >
        <Text tag="span">
          {{ tab.header }}
        </Text>

        <span :class="['transition-transform duration-200 text-content-text-secondary', { 'rotate-180': isActive(index) }]">
          <Icon iconType="ChevronDownIcon" />
        </span>
      </button>

      <!-- Content -->
      <Transition name="accordion" @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave">
        <div v-if="isActive(index)" class="accordion-content overflow-hidden transition-all duration-200">
          <div class="accordion-body">
            <Text tag="span">
              {{ tab.content }}
            </Text>
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
