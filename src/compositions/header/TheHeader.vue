<script setup lang="ts">
import { Button, Icon, Text } from '@/blocks';

import Logo from '../misc/Logo.vue';
import ThemeToggler from './ThemeToggler.vue';
import ThemePalette from './ThemePalette.vue';

const emit = defineEmits(['toggleSidebarDisplay']);

const onToggleSidebarDisplay = () => {
  emit('toggleSidebarDisplay');
};

const githubLink = 'https://github.com/ctsmith2308/vue-component-library';
</script>

<template>
  <header class="sticky top-0 z-10 flex flex-row justify-between items-center p-5 md:px-10 h-15 bg-page lg:px-20">
    <div class="flex flew-row items-center gap-2 w-250">
      <Button class="flex md:hidden" @click="onToggleSidebarDisplay" aria-label="Toggle sidebar" size="md" variant="ghost">
        <template #icon>
          <Icon iconType="Bars3Icon" />
        </template>
      </Button>

      <Logo />

      <Text color="brand">Maven-Industries</Text>
    </div>

    <div class="flex flex-row gap-2 items-center">
      <ThemePalette />

      <ThemeToggler />

      <Button as="a" variant="ghost" size="md" :href="githubLink">
        <template #icon>
          <Icon iconType="GithubIcon" />
        </template>
      </Button>
    </div>
  </header>
</template>
