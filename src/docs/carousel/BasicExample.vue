<script setup lang="ts">
import { Carousel } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Basic';
const description = `Provide items via the value prop and use the item slot to customise each slide.`;
const htmlString = toHtmlHighlight(description, 'value');
const codeSnippet = `<Carousel :value="slides" :num-visible="1">
  <template #item="{ data }">
    <div>{{ data.title }}</div>
  </template>
</Carousel>
`;

interface Slide {
  title: string;
  description: string;
  bgClass: string;
}

const slides: Slide[] = [
  { title: 'Slide One', description: 'First slide content', bgClass: 'bg-brand-light' },
  { title: 'Slide Two', description: 'Second slide content', bgClass: 'bg-brand-secondary-lighter' },
  { title: 'Slide Three', description: 'Third slide content', bgClass: 'bg-success-lighter' },
  { title: 'Slide Four', description: 'Fourth slide content', bgClass: 'bg-danger-lighter' },
];
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="w-full max-w-lg">
      <Carousel :value="slides" :num-visible="1" :show-indicators="true" :show-navigators="true">
        <template #item="{ data }">
          <div :class="['rounded-lg p-8 flex flex-col items-center justify-center min-h-32 gap-2', (data as Slide).bgClass]">
            <span class="font-semibold text-lg text-content-text">{{ (data as Slide).title }}</span>

            <span class="text-sm text-content-text-secondary">{{ (data as Slide).description }}</span>
          </div>
        </template>
      </Carousel>
    </div>
  </DocumentExampleSection>
</template>
