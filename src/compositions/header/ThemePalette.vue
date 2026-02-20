<script setup lang="ts">
import { useTemplateRef } from 'vue';

import { useTheme } from '@/lib/composables';
import { Button, Icon, Text, Popover } from '@/blocks';

const { applyThemePalette, colorPaletteConfig } = useTheme();

const paletteForm = useTemplateRef<InstanceType<typeof Popover>>('paletteForm');
</script>

<template>
  <Button variant="ghost" size="md" aria-label="Toggle Theme Palette" @click="(e: MouseEvent) => paletteForm?.toggle(e)">
    <template #icon>
      <Icon iconType="PaintBrushIcon" />
    </template>
  </Button>

  <Popover ref="paletteForm">
    <div class="flex flex-col gap-3 min-w-[260px]">
      <Text>Brand Color</Text>

      <div class="flex flex-row items-center gap-2">
        <button
          v-for="(palette, idx) in colorPaletteConfig"
          :key="idx"
          :class="['w-5 h-5 rounded-full cursor-pointer', palette.tailwindClass]"
          @click="applyThemePalette(palette.color)"
        />
      </div>
    </div>
  </Popover>
</template>
