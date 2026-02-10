<script setup lang="ts">
interface TableSkeletonProps {
  rows?: number;
  columns: number;
}

withDefaults(defineProps<TableSkeletonProps>(), {
  rows: 5,
});
</script>

<template>
  <tbody>
    <tr v-for="i in rows" :key="i" class="border-b border-surface-border last:border-b-0">
      <td v-for="j in columns" :key="j" class="px-4 py-3">
        <div class="h-4 bg-surface-alt rounded animate-pulse"></div>
      </td>
    </tr>
  </tbody>
</template>
