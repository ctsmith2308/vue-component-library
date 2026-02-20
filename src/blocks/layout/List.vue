<script setup lang="ts" generic="T">
import type { ListItem } from './types';

interface Props {
  items: ListItem<T>[];
}

defineProps<Props>();

const emit = defineEmits<{
  itemClick: [value: T, item: ListItem<T>];
}>();

const handleItemClick = (item: ListItem<T>) => {
  emit('itemClick', item.value, item);
};
</script>

<template>
  <ul>
    <ListItem
      v-for="(item, idx) in items"
      :key="idx"
      :class="{ active: 'bg-color-brand' }"
      clickable
      @click="handleItemClick(item)"
    >
      {{ item.label }}

      <!-- Support nested lists -->
      <List v-if="item.children?.length" :items="item.children" @item-click="emit('itemClick', $event, item)" />
    </ListItem>
  </ul>
</template>
