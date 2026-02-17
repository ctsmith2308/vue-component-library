<script setup lang="ts"></script>

<template>
  <div class="flex flex-row w-auto">
    <div class="flex flex-1 flex-col pt-5 gap-8">
      <slot />
    </div>

    <div class="w-1/4 bg-surface">
      <div class="flex flex-col pt-5 px-10 gap-2">
        <h1>Content</h1>

        <slot name="quick-nav" />
      </div>
    </div>
  </div>
</template>
