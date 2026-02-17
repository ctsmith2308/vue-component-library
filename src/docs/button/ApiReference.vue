<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';

const apiTableData = {
  data: [],
  columns: [],
};

const htmlString = `This component is based on the <span class="inline-hightlight">button</span> element and supports common margin props.`;
</script>

<template>
  <DocumentApiSection :apiTableData="apiTableData">
    <template #description>
      {{ htmlString }}
    </template>
  </DocumentApiSection>
</template>
