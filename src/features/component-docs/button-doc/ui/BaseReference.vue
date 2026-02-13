<script setup lang="ts">
import { DocPanel, DocPanelQuickNav } from '@/compositions/docs';
import BasicDoc from './BasicDoc.vue';
import ColorDoc from './ColorDoc.vue';
import OutlineDoc from './OutlineDoc.vue';
import TextDoc from './TextDoc.vue';
import RaisedDoc from './RaisedDoc.vue';
import RoundedDoc from './RoundedDoc.vue';
import SizeDoc from './SizeDoc.vue';
</script>

<template>
  <DocPanel>
    <BasicDoc />
    <ColorDoc />
    <OutlineDoc />
    <TextDoc />
    <RaisedDoc />
    <RoundedDoc />
    <SizeDoc />

    <template #quick-nav>
      <DocPanelQuickNav />
    </template>
  </DocPanel>
</template>
