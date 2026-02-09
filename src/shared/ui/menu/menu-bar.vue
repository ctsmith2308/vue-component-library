<template>
  <div class="grid grid-cols-2 justify-items-center gap-2 h-15 w-full px-18 border border-gray-200 rounded-lg">
    <div class="flex flex-row items-center justify-start-safe h-full w-full gap-2">
      <slot name="left-column"> Left column</slot>
    </div>

    <div class="flex flex-row items-center justify-end-safe h-full w-full gap-2">
      <slot name="right-column"> Right column </slot>
    </div>
  </div>
</template>
