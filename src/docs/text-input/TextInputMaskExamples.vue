<script setup lang="ts">
import { ref } from 'vue';

import { TextInput } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Text Input';

const description = `Use the mask property to define the mask type for the input.`;

const htmlString = toHtmlHighlight(description, 'mask');

const codeSnippet = `
  <TextInput v-model="numberInput" type="text" mask="numeric" placeholder="numeric mask" />

  <TextInput v-model="alphaInput" type="text" mask="alpha" placeholder="alpha mask" />

  <TextInput v-model="alphaNumericInput" type="text" mask="alpha_num" placeholder="alpha numeric mask" />

  <TextInput v-model="alphaDashInput" type="text" mask="alpha_dash" placeholder="alpha dash mask" />

`;

const numberInput = ref('');

const alphaInput = ref('');

const alphaNumericInput = ref('');

const alphaDashInput = ref('');
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <TextInput v-model="numberInput" type="text" mask="numeric" name="numericInput" placeholder="numeric mask" />

    <TextInput v-model="alphaInput" type="text" mask="alpha" name="alphaInput" placeholder="alpha mask" />

    <TextInput
      v-model="alphaNumericInput"
      type="text"
      mask="alpha_num"
      name="alphaNumericInput"
      placeholder="alpha numeric mask"
    />

    <TextInput v-model="alphaDashInput" type="text" mask="alpha_dash" name="alphaDashInput" placeholder="alpha dash mask" />
  </DocumentExampleSection>
</template>
