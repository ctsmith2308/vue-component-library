<script setup lang="ts">
// Landing page layout - can be customized as needed
</script>

<template>
  <div class="landing-layout">
    <slot />
  </div>
</template>

<style scoped>
.landing-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
