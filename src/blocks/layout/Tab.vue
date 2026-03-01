<script setup lang="ts">
import { inject, onMounted, onBeforeUnmount } from 'vue';

interface TabProps {
  value: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<TabProps>(), {
  disabled: false,
});

const tabs = inject<{
  isActive: (value: string) => boolean;
  activate: (value: string) => void;
}>('tabs');

const tabList = inject<{
  register: (value: string) => void;
  unregister: (value: string) => void;
  focusNext: (value: string) => void;
  focusPrev: (value: string) => void;
  focusFirst: () => void;
  focusLast: () => void;
}>('tabList');

onMounted(() => tabList?.register(props.value));
onBeforeUnmount(() => tabList?.unregister(props.value));

function isActive(): boolean {
  return tabs?.isActive(props.value) ?? false;
}

function activate(): void {
  if (!props.disabled) tabs?.activate(props.value);
}

function onKeydown(e: KeyboardEvent): void {
  switch (e.key) {
    case 'ArrowRight':
      e.preventDefault();
      tabList?.focusNext(props.value);
      break;
    case 'ArrowLeft':
      e.preventDefault();
      tabList?.focusPrev(props.value);
      break;
    case 'Home':
      e.preventDefault();
      tabList?.focusFirst();
      break;
    case 'End':
      e.preventDefault();
      tabList?.focusLast();
      break;
  }
}
</script>

<template>
  <button
    role="tab"
    :aria-selected="isActive()"
    :tabindex="isActive() ? 0 : -1"
    :disabled="disabled"
    :class="[
      'px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 border-b',
      isActive()
        ? 'text-brand-dark border-brand-dark'
        : 'text-content-text-secondary hover:text-brand hover:border-brand border-transparent',
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    @click="activate"
    @keydown="onKeydown"
  >
    <slot />
  </button>
</template>
