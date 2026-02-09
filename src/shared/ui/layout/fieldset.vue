<script setup lang="ts">
import { ref, nextTick } from 'vue';

interface FieldsetProps {
  legend?: string;
  toggleable?: boolean;
  collapsed?: boolean;
}

const props = withDefaults(defineProps<FieldsetProps>(), {
  toggleable: false,
  collapsed: false,
});

const isCollapsed = ref(props.collapsed);

const toggle = () => {
  if (props.toggleable) {
    isCollapsed.value = !isCollapsed.value;
  }
};
</script>

<template>
  <fieldset class="fieldset w-full border border-surface-border rounded-lg bg-surface">
    <legend
      :class="['px-3 py-2 font-semibold text-content-text', { 'cursor-pointer hover:text-brand': toggleable }]"
      @click="toggle"
    >
      <div class="flex items-center gap-2">
        <span v-if="toggleable" :class="['transition-transform', { 'rotate-90': !isCollapsed }]">
          <slot name="toggle-icon">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </slot>
        </span>
        <span>{{ legend }}</span>
      </div>
    </legend>

    <Transition
      name="fieldset"
      @enter="
        (el: Element) => {
          (el as HTMLElement).style.height = 'auto';
          const height = (el as HTMLElement).offsetHeight;
          (el as HTMLElement).style.height = '0px';
          nextTick(() => {
            (el as HTMLElement).style.height = height + 'px';
          });
        }
      "
      @after-enter="
        (el: Element) => {
          (el as HTMLElement).style.height = 'auto';
        }
      "
      @leave="
        (el: Element) => {
          (el as HTMLElement).style.height = (el as HTMLElement).offsetHeight + 'px';
          nextTick(() => {
            (el as HTMLElement).style.height = '0px';
          });
        }
      "
    >
      <div v-if="!toggleable || !isCollapsed" class="fieldset-content overflow-hidden transition-all duration-200">
        <div class="p-4">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </fieldset>
</template>

<style scoped>
.fieldset {
  padding: 0;
}

.fieldset-content {
  transition: height 0.2s ease-in-out;
}
</style>
