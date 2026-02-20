<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';

import { Popover, Button } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const basicPop = useTemplateRef<InstanceType<typeof Popover>>('basicPop');
const closePop = useTemplateRef<InstanceType<typeof Popover>>('closePop');
const profilePop = useTemplateRef<InstanceType<typeof Popover>>('profilePop');
const formPop = useTemplateRef<InstanceType<typeof Popover>>('formPop');

const subscribed = ref<boolean>(false);

function onSubscribe(): void {
  subscribed.value = true;

  formPop.value?.hide();
}

const heading = 'Popover';
const description = `Avatar derives initials from the label prop. Use the image prop to render a photo instead.`;
const htmlString = toHtmlHighlight(description, 'label');

const codeSnippet = `<Popover ref="basicPop">
  <p class="m-0">This is a simple popover. Click outside to dismiss.</p>
</Popover>
`;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex flex-row gap-6 items-center justify-center w-full">
      <!-- Basic -->
      <Button label="Basic" variant="outlined" @click="(e: MouseEvent) => basicPop?.toggle(e)" />

      <Popover ref="basicPop">
        <p class="m-0">This is a simple popover. Click outside to dismiss.</p>
      </Popover>

      <!-- Close icon -->
      <Button label="Close Icon" variant="outlined" color="secondary" @click="(e: MouseEvent) => closePop?.toggle(e)" />

      <Popover ref="closePop" show-close-icon>
        <p class="m-0 pr-4">This popover has a close button in the top-right corner.</p>
      </Popover>

      <!-- User profile -->
      <Button label="Profile" @click="(e: MouseEvent) => profilePop?.toggle(e)" />

      <Popover ref="profilePop" show-close-icon>
        <div class="flex flex-col gap-3 min-w-[220px]">
          <p class="m-0 font-semibold text-[var(--color-content-text)]">User Profile</p>

          <hr class="border-none border-t border-[var(--color-surface-border)] m-0" />

          <div class="flex items-center gap-3">
            <div
              class="size-10 rounded-full bg-[var(--color-brand)] flex items-center justify-center text-[var(--color-brand-contrast)] font-bold text-sm shrink-0"
            >
              JD
            </div>

            <div>
              <p class="m-0 font-semibold text-sm text-[var(--color-content-text)]">Jane Doe</p>
              <p class="m-0 text-xs text-[var(--color-content-text-secondary)]">jane.doe@example.com</p>
            </div>
          </div>

          <div class="flex gap-2 mt-1">
            <Button label="Profile" variant="outlined" size="sm" class="flex-1" />

            <Button label="Sign Out" variant="outlined" color="danger" size="sm" class="flex-1" />
          </div>
        </div>
      </Popover>

      <!-- Newsletter form -->
      <Button label="Newsletter" color="success" @click="(e: MouseEvent) => formPop?.toggle(e)" />

      <Popover ref="formPop" show-close-icon>
        <div class="flex flex-col gap-3 min-w-[260px]">
          <template v-if="!subscribed">
            <p class="m-0 font-semibold text-[var(--color-content-text)]">Stay in the loop</p>

            <p class="m-0 text-xs text-[var(--color-content-text-secondary)]">
              Get updates delivered straight to your inbox.
            </p>

            <input
              type="email"
              placeholder="you@example.com"
              class="w-full h-8 rounded-md border border-[var(--color-input-border)] bg-[var(--color-surface)] text-[var(--color-content-text)] text-sm px-3 outline-none focus:border-[var(--color-brand)] transition-colors"
            />

            <Button label="Subscribe" color="success" size="sm" @click="onSubscribe" />
          </template>

          <template v-else>
            <p class="m-0 font-semibold text-[var(--color-success)]">You're subscribed! 🎉</p>
            <p class="m-0 text-xs text-[var(--color-content-text-secondary)]">Thanks for signing up.</p>
          </template>
        </div>
      </Popover>
    </div>
  </DocumentExampleSection>
</template>
