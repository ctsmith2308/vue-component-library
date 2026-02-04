<script setup lang="ts">
import { computed } from 'vue'

interface DisplayPanelProps {
  header: string
  content: string
  layout?: 'row' | 'column'
}

const props = withDefaults(defineProps<DisplayPanelProps>(), {
  layout: 'row',
})

const layoutClass = computed(() => {
  return {
    'flex-row': props.layout === 'row',
    'flex-col': props.layout === 'column',
  }
})

const classes = computed(() => {
  return ['flex gap-2', layoutClass.value]
})
</script>

<template>
  <div class="flex flex-col gap-8 p-6 border-indigo-600 rounded-lg bg-white">
    <div>
      {{ header }}
    </div>

    <div>
      {{ content }}
    </div>

    <div :class="classes">
      <slot />
    </div>
  </div>
</template>
