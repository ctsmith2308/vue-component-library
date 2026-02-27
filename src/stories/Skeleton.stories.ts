import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { Skeleton } from '@/blocks';

const meta = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    shape: { control: 'select', options: ['rectangle', 'circle', 'square'] },
    animation: { control: 'select', options: ['pulse', 'wave', 'none'] },
  },
  args: {
    shape: 'rectangle',
    animation: 'pulse',
    width: '100%',
    height: '1rem',
    borderRadius: '0.375rem',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Circle: Story = {
  args: { shape: 'circle', size: '3rem' },
};

export const Square: Story = {
  args: { shape: 'square', size: '3rem' },
};

export const Wave: Story = {
  args: { animation: 'wave', height: '2rem' },
};

export const NoAnimation: Story = {
  args: { animation: 'none', height: '2rem' },
};

// Simulate a card loading state with multiple skeletons
export const CardSkeleton: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="p-4 space-y-3 max-w-sm border border-gray-200 rounded-lg">
        <div class="flex items-center gap-3">
          <Skeleton shape="circle" size="2.5rem" />
          <div class="flex-1 space-y-2">
            <Skeleton height="0.75rem" width="60%" />
            <Skeleton height="0.75rem" width="40%" />
          </div>
        </div>
        <Skeleton height="8rem" />
        <Skeleton height="0.75rem" />
        <Skeleton height="0.75rem" width="80%" />
      </div>
    `,
  }),
};
