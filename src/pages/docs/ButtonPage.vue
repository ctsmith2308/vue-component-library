<script setup lang="ts">
import type { ShowcaseProps } from '@/compositions/docs/types';
import { DocShowcase } from '@/compositions/docs';
import { BaseReference, ApiReference } from '@/features/component-docs/button-doc';

const showcaseConfig: ShowcaseProps = {
  title: 'Button',
  description: 'Buttons allow users to take actions, and make choices, with a single tap',
  tabs: [
    { header: 'Examples', compontent: BaseReference },
    { header: 'Api', compontent: ApiReference },
  ],
};
</script>

<template>
  <DocShowcase :title="showcaseConfig.title" :description="showcaseConfig.description" :tabs="showcaseConfig.tabs" />
</template>
