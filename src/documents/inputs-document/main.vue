<script setup lang="ts">
import { ref } from 'vue'
import  TextInputDocument  from './text-input-document.vue'
import  SelectInputDocument  from './select-input-document.vue'
import  RadioInputDocument  from './radio-input-document.vue'
import  TextAreaDocument  from './textarea-document.vue'
import  CheckboxInput  from './checkbox-input-document.vue'


import { DocumentMain } from '@/components/panels'

const documentDetails = ref({
  header: 'Button',
  desription: 'Various button styles, colors and themes.'
})
</script>

<template>
  <DocumentMain :header="documentDetails.header" :description="documentDetails.desription">
    <RadioInputDocument/>
    <TextInputDocument/>
    <SelectInputDocument/>
    <TextAreaDocument/>
    <CheckboxInput/>
  </DocumentMain>
</template>
