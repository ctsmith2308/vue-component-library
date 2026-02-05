<script setup lang="ts">
import { ExampleCard } from '@/components/card'

interface props {
  header: string
  content: string
  codeSnippet: string
  layout?: 'row' | 'column'
}

const props = withDefaults(defineProps<props>(), {
  layout: 'row',
})
</script>

<template>
  <div class="flex flex-col gap-8 p-6 rounded-lg bg-white">
    <div>
      {{ header }}
    </div>

    <div>
      {{ content }}
    </div>

    <ExampleCard>
      <slot />
    </ExampleCard>

    <div>
      <v-code-block :code="codeSnippet" />
    </div>
  </div>
</template>
