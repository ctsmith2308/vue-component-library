<script setup lang="ts">
import { Button, Icon } from '@/blocks';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Icon';

const description = `Use the icon slot to render an icon beside the label. Control its position with iconPosition.`;

const htmlString = toHtmlHighlight(description, 'iconPosition');

const codeSnippet = `<Button label="Download" size="md">
  <template #icon>
    <Icon iconType="ArrowLongDownIcon" />
  </template>
</Button>

<Button label="External link" size="md" iconPosition="right" variant="outlined">
  <template #icon>
    <Icon iconType="LinkIcon" />
  </template>
</Button>

<Button label="Confirmed" size="md" color="success" iconPosition="left">
  <template #icon>
    <Icon iconType="CheckIcon" />
  </template>
</Button>
`;
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <div class="flex flex-wrap items-center gap-3">
      <Button label="Download" size="md">
        <template #icon>
          <Icon iconType="ArrowLongDownIcon" />
        </template>
      </Button>

      <Button label="External link" size="md" iconPosition="right" variant="outlined">
        <template #icon>
          <Icon iconType="LinkIcon" />
        </template>
      </Button>

      <Button label="Confirmed" size="md" color="success">
        <template #icon>
          <Icon iconType="CheckIcon" />
        </template>
      </Button>
    </div>
  </DocumentExampleSection>
</template>
