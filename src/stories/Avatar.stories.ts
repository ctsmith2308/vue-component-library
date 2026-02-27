import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { Avatar } from '@/blocks';

const meta = {
  title: 'Misc/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    shape: { control: 'select', options: ['circle', 'square'] },
    image: { control: 'text' },
    label: { control: 'text' },
    icon: { control: 'boolean' },
  },
  args: {
    size: 'md',
    shape: 'circle',
    icon: false,
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

// Initials from a full name (two-letter initials)
export const WithInitials: Story = {
  args: {
    label: 'Jane Doe',
  },
};

// Single word label falls back to first two characters
export const WithSingleName: Story = {
  args: {
    label: 'Alex',
  },
};

// Renders an image when a src is provided
export const WithImage: Story = {
  args: {
    image: 'https://i.pravatar.cc/150?img=3',
    label: 'Jane Doe',
  },
};

// Square shape variant
export const Square: Story = {
  args: {
    label: 'Jane Doe',
    shape: 'square',
  },
};

// Size variants
export const SizeSmall: Story = {
  args: {
    label: 'Jane Doe',
    size: 'sm',
  },
};

export const SizeMedium: Story = {
  args: {
    label: 'Jane Doe',
    size: 'md',
  },
};

export const SizeLarge: Story = {
  args: {
    label: 'Jane Doe',
    size: 'lg',
  },
};

export const SizeXL: Story = {
  args: {
    label: 'Jane Doe',
    size: 'xl',
  },
};

// Icon slot variant — provide an icon via the named slot
export const WithIcon: Story = {
  args: {
    icon: true,
  },
  render: (args) => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: `
      <Avatar v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
        </template>
      </Avatar>
    `,
  }),
};
