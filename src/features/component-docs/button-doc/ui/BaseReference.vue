<script setup lang="ts">
import { useScrollToSection } from '@/lib/composables/useScrollToSection';
import { Button } from '@/blocks';
import { DocPanel } from '@/compositions/docs';
import BasicDoc from './BasicDoc.vue';
import ColorDoc from './ColorDoc.vue';
import OutlineDoc from './OutlineDoc.vue';
import TextDoc from './TextDoc.vue';
import RaisedDoc from './RaisedDoc.vue';
import RoundedDoc from './RoundedDoc.vue';
import SizeDoc from './SizeDoc.vue';

const { scrollToSection } = useScrollToSection({ updateUrl: true });
</script>

<template>
  <DocPanel>
    <div id="basic">
      <BasicDoc />
    </div>

    <div id="color">
      <ColorDoc />
    </div>

    <div id="utline">
      <OutlineDoc />
    </div>

    <div id="text">
      <TextDoc />
    </div>

    <div id="raised">
      <RaisedDoc />
    </div>

    <div id="rounded">
      <RoundedDoc />
    </div>

    <div id="size">
      <SizeDoc />
    </div>

    <template #quick-nav>
      <Button label="Basic" variant="text" @click="scrollToSection('basic')" />
      <Button label="Colors" variant="text" @click="scrollToSection('color')" />
      <Button label="Outline" variant="text" @click="scrollToSection('outline')" />
      <Button label="Text" variant="text" @click="scrollToSection('text')" />
      <Button label="Raised" variant="text" @click="scrollToSection('raised')" />
      <Button label="Rounded" variant="text" @click="scrollToSection('rounded')" />
      <Button label="Sizes" variant="text" @click="scrollToSection('size')" />
    </template>
  </DocPanel>
</template>
