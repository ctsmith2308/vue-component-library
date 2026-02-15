<script setup lang="ts">
import { computed, type Component } from 'vue';

const props = defineProps<{
  tabComponent: Component;
  tabProps?: Record<string, unknown>;
}>();

const tabComponent = computed(() => props.tabComponent);
</script>

<template>
  <div class="flex flex-row w-full">
    <component :is="tabComponent" role="tabpanel" v-bind="tabProps || {}" />
  </div>
</template>
