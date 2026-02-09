<script setup lang="ts">
interface BreadcrumbItem {
  label: string;
  to?: string;
  icon?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string;
}

const props = withDefaults(defineProps<BreadcrumbProps>(), {
  separator: '/',
});

const emit = defineEmits<{
  itemClick: [item: BreadcrumbItem, index: number];
}>();

const handleClick = (item: BreadcrumbItem, index: number) => {
  emit('itemClick', item, index);
};
</script>

<template>
  <nav aria-label="Breadcrumb" class="breadcrumb">
    <ol class="flex items-center gap-2 text-sm flex-wrap">
      <li v-for="(item, index) in items" :key="index" class="flex items-center gap-2">
        <component
          :is="item.to ? 'a' : 'span'"
          :href="item.to"
          :class="[
            'breadcrumb-item inline-flex items-center gap-1.5',
            {
              'text-brand hover:text-brand-heavier cursor-pointer': item.to,
              'text-content-text-secondary': !item.to && index === items.length - 1,
              'text-content-text hover:text-brand cursor-pointer': !item.to && index < items.length - 1,
            },
          ]"
          @click="item.to ? null : handleClick(item, index)"
        >
          <span v-if="item.icon" class="flex items-center">
            <slot :name="`item-icon-${index}`" :item="item">
              <slot name="icon" :item="item"></slot>
            </slot>
          </span>
          {{ item.label }}
        </component>

        <span v-if="index < items.length - 1" class="text-content-text-secondary select-none">
          <slot name="separator">{{ props.separator }}</slot>
        </span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
@media (max-width: 640px) {
  .breadcrumb-item {
    font-size: 0.75rem;
  }
}
</style>
