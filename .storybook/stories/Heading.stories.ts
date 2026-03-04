import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { Heading } from '@/blocks';

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: [1, 2, 3, 4, 5] },
  },
  args: {
    size: 1,
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: { size: 1 },
  render: (args) => ({
    components: { Heading },
    setup() { return { args }; },
    template: `<Heading v-bind="args">Page Title (h1)</Heading>`,
  }),
};

export const H2: Story = {
  args: { size: 2 },
  render: (args) => ({
    components: { Heading },
    setup() { return { args }; },
    template: `<Heading v-bind="args">Section Heading (h2)</Heading>`,
  }),
};

export const H3: Story = {
  args: { size: 3 },
  render: (args) => ({
    components: { Heading },
    setup() { return { args }; },
    template: `<Heading v-bind="args">Subsection Heading (h3)</Heading>`,
  }),
};

export const H4: Story = {
  args: { size: 4 },
  render: (args) => ({
    components: { Heading },
    setup() { return { args }; },
    template: `<Heading v-bind="args">Component Heading (h4)</Heading>`,
  }),
};

export const H5: Story = {
  args: { size: 5 },
  render: (args) => ({
    components: { Heading },
    setup() { return { args }; },
    template: `<Heading v-bind="args">Minor Heading (h5)</Heading>`,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { Heading },
    template: `
      <div class="space-y-2">
        <Heading :size="1">Heading 1 — Page Title</Heading>
        <Heading :size="2">Heading 2 — Major Section</Heading>
        <Heading :size="3">Heading 3 — Subsection</Heading>
        <Heading :size="4">Heading 4 — Component</Heading>
        <Heading :size="5">Heading 5 — Minor</Heading>
      </div>
    `,
  }),
};
