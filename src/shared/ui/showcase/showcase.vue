<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
}>();
</script>

<template>
  <div class="showcase">
    <header class="showcase-header">
      <h1 class="showcase-title">{{ title }}</h1>
      <p v-if="description" class="showcase-description">{{ description }}</p>
    </header>

    <div class="showcase-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.showcase {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* justify-content: flex-start; */
}

.showcase-header {
  /* margin-bottom: 3rem; */
}

.showcase-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  /* margin: 0 0 0.5rem 0; */
}

.showcase-description {
  font-size: 1.125rem;
  color: #6c757d;
  /* margin: 0; */
  line-height: 1.6;
}

.showcase-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
