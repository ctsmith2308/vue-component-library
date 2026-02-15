<script setup lang="ts">
import { DocNav } from '@/compositions/docs';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex flex-1 relative lg:flex-row">
      <aside class="w-1/4 bg-surface shrink-0 hidden md:block">
        <DocNav />
      </aside>

      <main class="flex-1 bg-surface">
        <div class="max-w-1200 mx-1 py-2">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
