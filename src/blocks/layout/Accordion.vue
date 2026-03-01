<script setup lang="ts">
import { provide, ref, watch } from 'vue';

interface AccordionProps {
  value?: string | string[];
  multiple?: boolean;
}

const props = withDefaults(defineProps<AccordionProps>(), {
  multiple: false,
});

const emit = defineEmits<{
  'update:value': [value: string | string[]];
}>();

const openValues = ref<Set<string>>(
  new Set(Array.isArray(props.value) ? props.value : props.value ? [props.value] : []),
);

watch(() => props.value, (val) => {
  openValues.value = new Set(Array.isArray(val) ? val : val ? [val] : []);
});

function isOpen(value: string): boolean {
  return openValues.value.has(value);
}

function toggle(value: string): void {
  const next = new Set(openValues.value);
  if (next.has(value)) {
    next.delete(value);
  } else {
    if (!props.multiple) next.clear();
    next.add(value);
  }
  openValues.value = next;
  emit('update:value', props.multiple ? [...next] : [...next][0] ?? '');
}

provide('accordion', { isOpen, toggle });
</script>

<template>
  <div class="w-full space-y-2">
    <slot />
  </div>
</template>
