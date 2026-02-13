<script setup lang="ts">
import { DocApiPanel } from '@/compositions/docs';

const data = [
  {
    name: 'value',
    type: 'number',
    default: '0',
    description: 'some test decription',
  },
];

const columns = [
  { field: 'name', header: 'Name' },
  { field: 'type', header: 'Type' },
  { field: 'default', header: 'Default' },
  { field: 'description', header: 'Description' },
];
</script>

<template>
  <DocApiPanel :data="data" :columns="columns" />
</template>
