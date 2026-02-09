<script setup lang="ts">
import { ref } from 'vue';

import { Carousel, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
  <Carousel
    :value="products"
    :numVisible="3"
    :numScroll="1"
    :circular="true"
    :autoplayInterval="3000"
    @page="handlePageChange"
  >
    <template #item="{ data }">
      <div class="p-4">
        <img :src="data.image" :alt="data.name" class="w-full" />
        <p>{{ data.name }}</p>
      </div>
    </template>
  </Carousel>
  `);

interface Product {
  name: string;
  image: string;
}

const products = ref<Product[]>([
  { name: 'Product 1', image: '/img1.jpg' },
  { name: 'Product 2', image: '/img2.jpg' },
  { name: 'Product 3', image: '/img3.jpg' },
]);

const handlePageChange = (index: number): void => {
  console.log('Page:', index);
};
</script>

<template>
  <ShowcaseSection title="Carousel">
    <template #examples>
      <Carousel
        :value="products"
        :numVisible="3"
        :numScroll="1"
        :circular="true"
        :autoplayInterval="3000"
        @page="handlePageChange"
      >
        <template #item="{ data }">
          <div class="p-4">
            <img :src="data.image" :alt="data.name" class="w-full" />
            <p>{{ data.name }}</p>
          </div>
        </template>
      </Carousel>
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
