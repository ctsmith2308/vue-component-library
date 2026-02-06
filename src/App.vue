<script setup lang="ts">
import { useDocumentDisplay } from '@/composables';

import { List, ListItem } from '@/components/list';

import { MainLayout } from '@/components/layout';

const { componentDocuments, setDocumentDisplay, currentDocument } = useDocumentDisplay();
</script>

<template>
  <header></header>

  <MainLayout>
    <template #sidebar-content>
      <List>
        <List-Item
          v-for="(document, idx) in componentDocuments"
          :key="idx"
          @click="setDocumentDisplay(document)"
        >
          {{ document.label }}
        </List-Item>
      </List>
    </template>

    <template #main-content>
      <component :is="currentDocument.component" />
    </template>
  </MainLayout>
</template>
