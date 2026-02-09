<script setup lang="ts">
import { Card } from '@/shared/ui';

defineProps<{
  title: string;
}>();
</script>

<template>
  <section class="showcase-section">
    <h2 class="section-title">
      {{ title }}
    </h2>

    <Card>
      <slot name="examples" />
    </Card>

    <div v-if="$slots.code" class="code-container">
      <slot name="code" />
    </div>
  </section>
</template>

<style scoped>
.showcase-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  /* padding: 0px 10px; */
  /* background: white; */
  /* border-radius: 12px; */
  /* border: 1px solid #e9ecef; */
  overflow: hidden;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  /* margin: 0; */
  /* padding: 1.5rem 2rem; */
  /* border-bottom: 1px solid #e9ecef; */
  /* background: #fafbfc; */
}
</style>
