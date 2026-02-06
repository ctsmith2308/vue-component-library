<script setup lang="ts">
import { ref } from 'vue'
import { DocumentMain } from '@/components/panels'

const documentDetails = ref({
  header: 'Button',
  desription: 'Various button styles, colors and themes.'
  })
</script>

<template>
  <DocumentMain :header="documentDetails.header" :description="documentDetails.desription">
  </DocumentMain>
</template>
