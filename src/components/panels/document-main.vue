<script setup lang="ts">

defineProps<{
  header: string
  description: string
}>()
</script>


<template>
  <div class="flex flex-col gap-4 p-10 bg-gray-100">
    <h3 class="mt-2 text-3xl font-medium">
      {{ header }}
    </h3>

    <p v-if="description" class="text-base/7 text-gray-700">
      {{ description }}
    </p>

    <slot />
  </div>
</template>
