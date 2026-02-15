<script setup lang="ts">
import { useDocSections } from '@/lib/composables';

import { ExamplePanel } from '@/compositions/docs';
import BasicDoc from './BasicDoc.vue';
import ColorDoc from './ColorDoc.vue';
import OutlineDoc from './OutlineDoc.vue';
import TextDoc from './TextDoc.vue';
import RaisedDoc from './RaisedDoc.vue';
import RoundedDoc from './RoundedDoc.vue';
import SizeDoc from './SizeDoc.vue';

const { sections } = useDocSections([
  { id: 'basic', label: 'Basic', component: BasicDoc },
  { id: 'color', label: 'Colors', component: ColorDoc },
  { id: 'outline', label: 'Outline', component: OutlineDoc },
  { id: 'text', label: 'Text', component: TextDoc },
  { id: 'raised', label: 'Raised', component: RaisedDoc },
  { id: 'rounded', label: 'Rounded', component: RoundedDoc },
  { id: 'size', label: 'Sizes', component: SizeDoc },
]);
</script>

<template>
  <ExamplePanel :sections="sections" />
</template>
