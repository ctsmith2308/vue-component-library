<script setup lang="ts">
defineProps<{
  tag?: 'p' | 'div' | 'span' | 'label' | 'section' | 'article';
  size?: 'sm' | 'md' | 'lg';
}>();
</script>

<template>
  <component :is="tag ?? 'p'" class="text-content-text-muted leading-relaxed">
    <slot />
  </component>
</template>
