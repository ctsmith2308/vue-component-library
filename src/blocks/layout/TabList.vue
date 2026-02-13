<script setup lang="ts"></script>

<template>
  <div class="tab-headers flex border-b border-surface-border overflow-x-auto">
    <slot />
  </div>
</template>

<style scoped>
.tab-headers {
  scrollbar-width: thin;
  scrollbar-color: var(--color-brand-secondary-lighter) transparent;
}

.tab-headers::-webkit-scrollbar {
  height: 4px;
}

.tab-headers::-webkit-scrollbar-track {
  background: transparent;
}

.tab-headers::-webkit-scrollbar-thumb {
  background: var(--color-brand-secondary-lighter);
  border-radius: 2px;
}
</style>
