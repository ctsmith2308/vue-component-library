<script setup lang="ts">
import { inject, ref, provide } from 'vue';

const tabs = inject<{
  isActive: (value: string) => boolean;
  activate: (value: string) => void;
}>('tabs');

// Registry of tab values in DOM order, populated by each Tab on mount.
const registeredTabs = ref<string[]>([]);

function register(value: string): void {
  if (!registeredTabs.value.includes(value)) {
    registeredTabs.value.push(value);
  }
}

function unregister(value: string): void {
  registeredTabs.value = registeredTabs.value.filter((v) => v !== value);
}

function focusNext(currentValue: string): void {
  const idx = registeredTabs.value.indexOf(currentValue);
  const next = registeredTabs.value[idx + 1] ?? registeredTabs.value[0];
  if (next) tabs?.activate(next);
}

function focusPrev(currentValue: string): void {
  const idx = registeredTabs.value.indexOf(currentValue);
  const prev = registeredTabs.value[idx - 1] ?? registeredTabs.value[registeredTabs.value.length - 1];
  if (prev) tabs?.activate(prev);
}

function focusFirst(): void {
  const first = registeredTabs.value[0];
  if (first) tabs?.activate(first);
}

function focusLast(): void {
  const last = registeredTabs.value[registeredTabs.value.length - 1];
  if (last) tabs?.activate(last);
}

provide('tabList', { register, unregister, focusNext, focusPrev, focusFirst, focusLast });
</script>

<template>
  <div class="flex border-b border-surface-border" role="tablist">
    <slot />
  </div>
</template>
