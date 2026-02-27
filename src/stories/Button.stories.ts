import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { Button } from '@/blocks';

const meta = {
  title: 'Button/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'success', 'danger'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'jumbo'] },
    variant: { control: 'select', options: ['outlined', 'link', 'text', 'ghost'] },
    as: { control: 'select', options: ['button', 'a'] },
    iconPosition: { control: 'select', options: ['left', 'right'] },
  },
  args: {
    label: 'Button',
    color: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
    raised: false,
    rounded: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Primary' },
};

export const Secondary: Story = {
  args: { label: 'Secondary', color: 'secondary' },
};

export const Success: Story = {
  args: { label: 'Success', color: 'success' },
};

export const Danger: Story = {
  args: { label: 'Danger', color: 'danger' },
};

export const Outlined: Story = {
  args: { label: 'Outlined', variant: 'outlined' },
};

export const Ghost: Story = {
  args: { label: 'Ghost', variant: 'ghost' },
};

export const Text: Story = {
  args: { label: 'Text', variant: 'text' },
};

export const Link: Story = {
  args: { label: 'Link', variant: 'link', as: 'a', href: 'https://example.com' },
};

export const Raised: Story = {
  args: { label: 'Raised', raised: true },
};

export const Rounded: Story = {
  args: { label: 'Rounded', rounded: true },
};

export const Loading: Story = {
  args: { label: 'Loading', loading: true },
};

export const Disabled: Story = {
  args: { label: 'Disabled', disabled: true },
};

export const SizeSmall: Story = {
  args: { label: 'Small', size: 'sm' },
};

export const SizeLarge: Story = {
  args: { label: 'Large', size: 'lg' },
};

export const SizeXL: Story = {
  args: { label: 'XL', size: 'xl' },
};

export const SizeJumbo: Story = {
  args: { label: 'Jumbo', size: 'jumbo' },
};

export const WithIconLeft: Story = {
  args: { label: 'With Icon', iconPosition: 'left' },
  render: (args) => ({
    components: { Button },
    setup() { return { args }; },
    template: `
      <Button v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
          </svg>
        </template>
      </Button>
    `,
  }),
};

export const IconOnly: Story = {
  args: {},
  render: (args) => ({
    components: { Button },
    setup() { return { args }; },
    template: `
      <Button v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
          </svg>
        </template>
      </Button>
    `,
  }),
};
