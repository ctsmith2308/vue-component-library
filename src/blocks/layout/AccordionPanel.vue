<script setup lang="ts">
import { inject, provide } from 'vue';

interface AccordionPanelProps {
  value: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<AccordionPanelProps>(), {
  disabled: false,
});

const accordion = inject<{
  isOpen: (value: string) => boolean;
  toggle: (value: string) => void;
}>('accordion');

function isOpen(): boolean {
  return accordion?.isOpen(props.value) ?? false;
}

function toggle(): void {
  if (!props.disabled) accordion?.toggle(props.value);
}

// Provide panel context so AccordionHeader and AccordionContent
// can read open state and trigger toggle without needing props drilled down.
provide('accordionPanel', { isOpen, toggle, disabled: props.disabled });
</script>

<template>
  <div class="panel">
    <slot />
  </div>
</template>
