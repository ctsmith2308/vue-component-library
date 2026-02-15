<script setup lang="ts">
import { ComponentDocPage, ExamplesPanel, ApiPanel } from '@/compositions/docs';
import { buttonExamplesConfig, buttonApiConfig } from '@/docs/button-doc';
// import { BaseReference, ApiReference } from '@/docs/button-doc';

const showcaseConfig = {
  title: 'Button',
  description: 'Buttons allow users to take actions, and make choices, with a single tap',
  tabs: [
    {
      header: 'Examples',
      component: ExamplesPanel,
      props: { sections: buttonExamplesConfig }, // These get passed to ExamplesPanel
    },
    {
      header: 'Api',
      component: ApiPanel,
      props: { sections: buttonApiConfig }, // These get passed to ApiPanel
    },
  ],
};
</script>

<template>
  <ComponentDocPage :title="showcaseConfig.title" :description="showcaseConfig.description" :tabs="showcaseConfig.tabs" />
</template>
