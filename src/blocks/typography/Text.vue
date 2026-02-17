<script setup lang="ts">
defineProps<{
  textType?: 'p' | 'label' | 'span';
  size?: 'sm' | 'md' | 'lg'; // sm -> caption, md -> body -> lg -> lead paragraph
}>();
</script>

<template>
  <label v-if="textType === 'label'">
    <slot />
  </label>

  <span v-else-if="textType === 'span'">
    <slot />
  </span>

  <p v-else class="text-content-text-secondary leading-relaxed">
    <slot />
  </p>
</template>
