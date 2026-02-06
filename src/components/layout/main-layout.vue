<script setup lang="ts"></script>

<template>
  <main class="flex flex-col gap-4">
    <!-- <div class="">the header</div> -->

    <div class="flex flex-row h-full">
      <!-- Sidebar: hidden on small screens, fixed width on md+ -->
      <aside class="hidden md:block md:flex-[0_0_250px] h-screen overflow-y-auto">
        <slot name="sidebar-content"> Default fallback </slot>
      </aside>

      <!-- Main content: takes remaining space -->
      <section class="flex-1 min-w-0 h-screen overflow-y-auto">
        <slot name="main-content"> Im the main content </slot>
      </section>
    </div>
  </main>
</template>
