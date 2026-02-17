<script setup lang="ts">
import { onMounted } from 'vue';
import { useTheme } from '@/lib/composables';

import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline';
// import { Button } from '@/blocks';

const { toggleTheme, isDark, initializeTheme } = useTheme();

onMounted(() => initializeTheme());
</script>

<!-- TODO: Create "GHOST" button -->
<template>
  <button
    @click="toggleTheme"
    type="button"
    class="flex items-center justify-center w-10 h-10 rounded-lg border border-surface-border bg-surface text-content-text-secondary hover:bg-hover hover:text-brand transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand/50"
    aria-label="Toggle Dark Mode"
  >
    <SunIcon v-if="!isDark" class="w-5 h-5" />
    <MoonIcon v-else class="w-5 h-5" />
  </button>

  <!-- <Button size="md">
    <SunIcon v-if="!isDark" class="w-5 h-5" />
    <MoonIcon v-else class="w-5 h-5" />
  </Button> -->
</template>
