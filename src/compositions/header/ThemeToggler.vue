<script setup lang="ts">
import { onMounted } from 'vue';

import { useTheme } from '@/lib/composables';

import { Button, Icon } from '@/blocks';

const { toggleTheme, isDark, initializeTheme } = useTheme();

onMounted(() => initializeTheme());
</script>

<template>
  <Button variant="ghost" size="md" aria-label="Toggle Dark Mode" @click="toggleTheme" icon-only>
    <template #icon>
      <Icon v-if="!isDark" iconType="SunIcon" />
      <Icon v-else iconType="MoonIcon" />
    </template>
  </Button>
</template>
