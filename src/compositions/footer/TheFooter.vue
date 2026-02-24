<script setup lang="ts">
import { Text } from '@/blocks';
import vueLogo from '@/assets/images/vue-logo.svg';
import tailwindLogo from '@/assets/images/tailwind-logo.svg';
</script>

<template>
  <footer class="flex flex-row items-center gap-2 p-5 md:px-10 h-15 border-t border-surface-border bg-page">
    <Text>Powered by</Text>

    <a href="https://vuejs.org/" target="_blank">
      <img :src="vueLogo" alt="Vue" class="h-4 w-auto" />
    </a>

    <a href="https://tailwindcss.com/" target="_blank">
      <img :src="tailwindLogo" alt="Tailwind" class="h-4 w-auto" />
    </a>
  </footer>
</template>
