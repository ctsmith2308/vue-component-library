<script setup lang="ts">
import { Text } from '@/blocks';

import type { NavItem } from './types';

defineProps<{
  items: NavItem[];
}>();

defineEmits<{
  select: [id: string];
}>();
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id" @click="$emit('select', item.id)" class="cursor-pointer">
      <Text>{{ item.label }}</Text>
    </li>
  </ul>
</template>
