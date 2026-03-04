import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { Card } from '@/blocks';

const meta = {
  title: 'Surfaces/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card>
        <div class="p-4">
          <h3 class="font-semibold text-base mb-2">Card Title</h3>
          <p class="text-sm text-gray-500">This is the card body content. Cards are fully slot-driven — drop in any content you like.</p>
        </div>
      </Card>
    `,
  }),
};

export const WithImage: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card class="max-w-xs overflow-hidden">
        <img src="https://picsum.photos/seed/card/400/200" alt="Card image" class="w-full h-40 object-cover" />
        <div class="p-4">
          <h3 class="font-semibold text-base mb-1">Beautiful Landscape</h3>
          <p class="text-sm text-gray-500">A short description beneath a card image.</p>
        </div>
      </Card>
    `,
  }),
};
