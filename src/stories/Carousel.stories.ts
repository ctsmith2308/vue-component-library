import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { Carousel } from '@/blocks';

const items = [
  { label: 'Slide 1', color: '#e0f2fe' },
  { label: 'Slide 2', color: '#fce7f3' },
  { label: 'Slide 3', color: '#dcfce7' },
  { label: 'Slide 4', color: '#fef9c3' },
  { label: 'Slide 5', color: '#ede9fe' },
];

const meta = {
  title: 'Layout/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  args: {
    value: items,
    numVisible: 1,
    numScroll: 1,
    circular: false,
    autoplayInterval: 0,
    showIndicators: true,
    showNavigators: true,
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

const itemSlot = `
  <template #item="{ data }">
    <div class="flex items-center justify-center h-48 rounded-lg text-lg font-semibold" :style="{ background: data.color }">
      {{ data.label }}
    </div>
  </template>
`;

export const Default: Story = {
  render: (args) => ({
    components: { Carousel },
    setup() { return { args }; },
    template: `<Carousel v-bind="args">${itemSlot}</Carousel>`,
  }),
};

export const MultiVisible: Story = {
  args: { numVisible: 2, numScroll: 1 },
  render: (args) => ({
    components: { Carousel },
    setup() { return { args }; },
    template: `<Carousel v-bind="args">${itemSlot}</Carousel>`,
  }),
};

export const Circular: Story = {
  args: { circular: true },
  render: (args) => ({
    components: { Carousel },
    setup() { return { args }; },
    template: `<Carousel v-bind="args">${itemSlot}</Carousel>`,
  }),
};

export const Autoplay: Story = {
  args: { circular: true, autoplayInterval: 2000 },
  render: (args) => ({
    components: { Carousel },
    setup() { return { args }; },
    template: `<Carousel v-bind="args">${itemSlot}</Carousel>`,
  }),
};

export const NoControls: Story = {
  args: { showNavigators: false, showIndicators: false },
  render: (args) => ({
    components: { Carousel },
    setup() { return { args }; },
    template: `<Carousel v-bind="args">${itemSlot}</Carousel>`,
  }),
};
