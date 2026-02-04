<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/buttons'
import { DisplayPanel } from '@/components/panel'

const details = ref({
  componentName: 'Buttons',
  componentContent: 'Some details about the buttons bar',
})
</script>

<template>
  <DisplayPanel :header="details.componentName" :content="details.componentContent">
    <Button label="primary" />
    <Button label="secondary" color="secondary" />
    <Button label="success" color="success" />
    <Button label="danger" color="danger" />
  </DisplayPanel>

  <DisplayPanel :header="details.componentName" :content="details.componentContent">
    <Button label="primary" variant="outlined" />
    <Button label="secondary" color="secondary" variant="outlined" />
    <Button label="success" color="success" variant="outlined" />
    <Button label="danger" color="danger" variant="outlined" />
  </DisplayPanel>

  <DisplayPanel :header="details.componentName" :content="details.componentContent">
    <Button label="loading" loading />
    <Button label="disabled" disabled />
    <Button label="button link" variant="link" />
    <Button label="rounded" rounded />
  </DisplayPanel>

  <DisplayPanel :header="details.componentName" :content="details.componentContent">
    <Button label="small" size="sm" />
    <Button label="medium" size="md" />
    <Button label="large" size="lg" />
    <Button label="x-large" size="xl" />
    <Button label="jumbo" size="jumbo" />
  </DisplayPanel>
</template>
