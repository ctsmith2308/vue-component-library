import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { Accordion } from '@/blocks';

const sampleTabs = [
  { header: 'What is a component library?', content: 'A component library is a collection of reusable UI components that can be used across projects to maintain consistency and speed up development.' },
  { header: 'How do I install this library?', content: 'You can install the library via npm: npm install @your-org/blocks. Then import individual components as needed.' },
  { header: 'Is TypeScript supported?', content: 'Yes, all components are written in TypeScript and ship with full type definitions.' },
  { header: 'This item is disabled', content: 'You should not be able to open this.', disabled: true },
];

const meta = {
  title: 'Layout/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  args: {
    tabs: sampleTabs,
    multiple: false,
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MultipleOpen: Story = {
  args: { multiple: true },
};

export const WithActiveIndex: Story = {
  args: { activeIndex: 0 },
};

export const MultipleWithPreopened: Story = {
  args: { multiple: true, activeIndex: [0, 2] },
};
