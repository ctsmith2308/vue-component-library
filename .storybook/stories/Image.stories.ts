import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { Image } from '@/blocks';

const meta = {
  title: 'Media/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    fit: { control: 'select', options: ['cover', 'contain', 'fill'] },
  },
  args: {
    src: 'https://picsum.photos/seed/story/800/400',
    alt: 'Sample landscape photo',
    preview: false,
    fit: 'cover',
  },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDimensions: Story = {
  args: { width: 400, height: 200 },
};

export const Contain: Story = {
  args: { fit: 'contain', height: 200 },
};

export const WithPreview: Story = {
  args: { preview: true },
};

export const BrokenImage: Story = {
  args: { src: 'https://example.com/nonexistent-image.jpg', alt: 'A broken image' },
};
