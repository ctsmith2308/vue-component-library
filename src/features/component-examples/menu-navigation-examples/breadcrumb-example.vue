<script setup lang="ts">
import { ref } from 'vue';

import { type BreadcrumbItem, Breadcrumb, HomeIcon, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
  <Breadcrumb :items="items" separator="/" @itemClick="handleClick">
    <template #item-icon-0>
      <HomeIcon />
    </template>
  </Breadcrumb>
  `);

const items: BreadcrumbItem[] = [
  { label: 'Home', to: '/', icon: true },
  { label: 'Products', to: '/products' },
  { label: 'Electronics' },
];

const handleClick = (item: BreadcrumbItem, index: number): void => {
  console.log('Breadcrumb clicked:', item, index);
};
</script>

<template>
  <ShowcaseSection title="Breadcrumb">
    <template #examples>
      <Breadcrumb :items="items" separator="/" @itemClick="handleClick">
        <template #item-icon-0>
          <HomeIcon />
        </template>
      </Breadcrumb>
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
