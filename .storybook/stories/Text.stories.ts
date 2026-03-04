import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { Text } from '@/blocks';

const meta = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    tag: { control: 'select', options: ['p', 'div', 'span', 'label', 'section', 'article'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['default', 'muted', 'secondary', 'danger', 'brand'] },
  },
  args: {
    tag: 'p',
    size: 'md',
    color: 'muted',
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Text },
    setup() { return { args }; },
    template: `<Text v-bind="args">The quick brown fox jumps over the lazy dog.</Text>`,
  }),
};

export const Small: Story = {
  args: { size: 'sm' },
  render: (args) => ({
    components: { Text },
    setup() { return { args }; },
    template: `<Text v-bind="args">Small body text, great for captions and helper copy.</Text>`,
  }),
};

export const Large: Story = {
  args: { size: 'lg' },
  render: (args) => ({
    components: { Text },
    setup() { return { args }; },
    template: `<Text v-bind="args">Large body text for introductory paragraphs.</Text>`,
  }),
};

export const AllColors: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div class="space-y-2">
        <Text color="default">Default — primary content text</Text>
        <Text color="muted">Muted — secondary reading content</Text>
        <Text color="secondary">Secondary — de-emphasised copy</Text>
        <Text color="danger">Danger — error or warning message</Text>
        <Text color="brand">Brand — highlighted or branded text</Text>
      </div>
    `,
  }),
};
