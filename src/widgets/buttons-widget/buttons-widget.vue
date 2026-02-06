<script setup lang="ts">
import { ref } from 'vue'

import ButtonsTypes from './buttons-types.vue'
import ButtonsColors from './buttons-colors.vue'
import ButtonsOutlined from './buttons-outlined.vue'
import ButtonsRaised from './buttons-raised.vue'
import ButtonsSizes from './button-sizes.vue'
import ButtonsText from './buttons-text.vue'
import { DocumentMain } from '@/components/panels'

const documentDetails = ref({
  header: 'Button',
  desription: 'Various button styles, colors and themes.'
})
</script>

<template>
  <DocumentMain :header="documentDetails.header" :description="documentDetails.desription">
    <ButtonsTypes />

    <ButtonsColors />

    <ButtonsOutlined />

    <ButtonsRaised />

    <ButtonsText />

    <ButtonsSizes />
  </DocumentMain>
</template>
