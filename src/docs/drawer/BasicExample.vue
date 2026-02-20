<script setup lang="ts">
import { ref } from 'vue';

import { Drawer, Button, Text } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Basic';
const description = `Use isOpen to control the drawer and listen for the close event to toggle state. The header, default, and footer slots let you compose content freely.`;
const htmlString = toHtmlHighlight(description, 'isOpen');

const codeSnippet = `<Button @click="onOpen">Open Drawer</Button>

<Drawer :is-open="isOpen" position="left" size="md" @close="onClose">
  <template #header>My Drawer</template>
  <p>Drawer content goes here.</p>
  <template #footer>
    <Button @click="onClose">Close</Button>
  </template>
</Drawer>
`;

const isOpen = ref(false);

const onOpen = () => {
  isOpen.value = true;
};

const onClose = () => {
  isOpen.value = false;
};
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Button variant="outlined" label="Open Drawer" @click="onOpen" />

    <Drawer :is-open="isOpen" position="left" size="md" @close="onClose">
      <template #header> <Text>My Drawer</Text></template>

      <Text>Drawer content goes here.</Text>

      <template #footer>
        <Button variant="ghost" size="md" label="Close" @click="onClose" />
      </template>
    </Drawer>
  </DocumentExampleSection>
</template>
