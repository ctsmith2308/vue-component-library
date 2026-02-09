<script setup lang="ts">
import { ref } from 'vue';

import { Avatar, UserIcon, ShowcaseSection } from '@/shared/ui';
import VCodeBlock from '@wdns/vue-code-block';

const codeSnippet = ref(`
  <!-- With image -->
    <Avatar image="/path/to/avatar.jpg" size="lg" />

    <!-- With initials -->
    <Avatar label="John Doe" shape="circle" />

    <!-- With icon -->
    <Avatar :icon="true" size="md">
      <template #icon>
        <UserIcon />
      </template>
    </Avatar>
  `);
</script>

<template>
  <ShowcaseSection title="Avatar">
    <template #examples>
      <!-- With image -->
      <Avatar image="/path/to/avatar.jpg" size="lg" />

      <!-- With initials -->
      <Avatar label="John Doe" shape="circle" />

      <!-- With icon -->
      <Avatar :icon="true" size="md">
        <template #icon>
          <UserIcon />
        </template>
      </Avatar>
    </template>

    <template #code>
      <VCodeBlock :code="codeSnippet" />
    </template>
  </ShowcaseSection>
</template>
