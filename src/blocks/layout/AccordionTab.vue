<script lang="ts">
import { ACCORDION_TAB_KEY } from './types';

// Stamp the symbol onto the component options object so Accordion can
// identify this vnode without relying on the component name string.
export default { accordionTabKey: ACCORDION_TAB_KEY };
</script>

<script setup lang="ts">
defineProps<{
  header: string;
  disabled?: boolean;
}>();
</script>

<template>
  <slot />
</template>
