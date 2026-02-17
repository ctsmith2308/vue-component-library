<script setup lang="ts">
import { Button } from '@/blocks';
import { ExampleSection } from '@/compositions/docs';

const content = {
  title: 'Basic',
  description: 'Use the label property to display content within the button',
  keyword: 'label',
};
</script>

<template>
  <ExampleSection :content="content">
    <Button label="loading..." loading />
  </ExampleSection>
</template>
