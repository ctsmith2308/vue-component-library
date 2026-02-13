<script setup lang="ts">
import { DataTable, Button } from '@/blocks';
import { DocPanel } from '@/compositions/docs';
import { useScrollToSection } from '@/lib/composables/useScrollToSection';

const { scrollToSection } = useScrollToSection({ updateUrl: true });

const propsDataConfig = {
  data: [
    {
      name: 'label',
      type: 'string',
      default: 'undefined',
      description: 'Text of the button.',
    },
    {
      name: 'color',
      type: `'primary' | 'secondary' | 'success' | 'danger'`,
      default: `'primary'`,
      description: 'Color of the button',
    },
    {
      name: 'size',
      type: `'sm' | 'md' | 'lg' | 'xl' | 'jumbo'`,
      default: `'md'`,
      description: 'Size of the button.',
    },
    {
      name: 'variant',
      type: `'outlined' | 'link' | 'text'`,
      default: 'undefined',
      description: 'Variant styling of the button.',
    },
    {
      name: 'raised',
      type: 'boolean',
      default: 'false',
      description: 'Adds box shadow to the button.',
    },
    {
      name: 'rounded',
      type: 'boolean',
      default: 'false',
      description: 'Gives rounded border to the button.',
    },
    // {
    //   name: 'icon',
    //   type: 'boolean',
    //   default: 'undefined',
    //   description: 'some test decription',
    // },
    {
      name: 'loading',
      type: 'boolean',
      default: 'false',
      description: 'Indicates the loading status of the button.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Indicates the disabled status of the button',
    },
  ],

  columns: [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' },
    { field: 'description', header: 'Description' },
  ],
};

const slotsDataConfig = {
  data: [{ name: 'icon', description: 'Slotted content for icon.' }],
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'description', header: 'Description' },
  ],
};

const onRowClick = () => {
  console.log('clicked');
};
</script>

<template>
  <DocPanel>
    <div id="props">
      <h1>Props</h1>

      <DataTable :data="propsDataConfig.data" :columns="propsDataConfig.columns" @rowClick="onRowClick" />
    </div>

    <div id="slots">
      <h1>Slots</h1>

      <DataTable :data="slotsDataConfig.data" :columns="slotsDataConfig.columns" @rowClick="onRowClick" />
    </div>

    <template #quick-nav>
      <Button label="Props" variant="text" @click="scrollToSection('props')" />
      <Button label="Slots" variant="text" @click="scrollToSection('slots')" />
    </template>
  </DocPanel>
</template>
