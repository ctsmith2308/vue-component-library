<script setup lang="ts"></script>

<template>
  <div class="flex flex-row w-full">
    <div class="flex flex-1 flex-col pt-5 gap-8">
      <slot />
    </div>

    <div class="w-1/4 bg-surface shrink-0">
      <slot name="quick-nav" />
    </div>
  </div>
</template>
