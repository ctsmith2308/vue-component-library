<script setup lang="ts">
defineProps<{
  size: number;
}>();
</script>

<template>
  <!-- Page title -->
  <h1 v-if="size === 1" class="text-heading-1 text-content-text"><slot /></h1>

  <!-- Major Section heading -->
  <h2 v-if="size === 2" class="text-heading-2 text-content-text"><slot /></h2>

  <!-- Subsection heading -->
  <h3 v-if="size === 3" class="text-heading-3 text-content-text"><slot /></h3>

  <!-- Component Heading  -->
  <h4 v-if="size === 4" class="text-heading-4 text-content-text"><slot /></h4>

  <!-- Minor Headging -->
  <h5 v-if="size === 5" class="text-heading-5 text-content-text"><slot /></h5>
</template>
