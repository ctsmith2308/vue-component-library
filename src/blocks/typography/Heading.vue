<script setup lang="ts">
defineProps<{
  size: number;
}>();
</script>

<template>
  <!-- Page title -->
  <h1 v-if="size === 1" class="text-5xl font-extrabold text-content-text leading-tight tracking-tight">
    <slot />
  </h1>

  <!-- Major Section heading -->
  <h2 v-if="size === 2" class="text-4xl font-bold text-content-text leading-tight tracking-tight">
    <slot />
  </h2>

  <!-- Subsection heading -->
  <h3 v-if="size === 3" class="text-3xl font-semibold text-content-text leading-tight">
    <slot />
  </h3>

  <!-- Component Heading  -->
  <h4 v-if="size === 4" class="text-2xl font-semibold text-content-text leading-normal">
    <slot />
  </h4>

  <!-- Minor Headging -->
  <h5 v-if="size === 5" class="text-xl font-semibold text-content-text leading-normal">
    <slot />
  </h5>
</template>
