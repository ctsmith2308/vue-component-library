import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { Tag } from '@/blocks';

const meta = {
  title: 'Misc/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    severity: { control: 'select', options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'] },
  },
  args: {
    value: 'New',
    severity: 'primary',
    rounded: false,
    icon: false,
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Secondary: Story = { args: { value: 'Beta', severity: 'secondary' } };
export const Success: Story = { args: { value: 'Active', severity: 'success' } };
export const Danger: Story = { args: { value: 'Deprecated', severity: 'danger' } };
export const Warning: Story = { args: { value: 'Pending', severity: 'warning' } };
export const Info: Story = { args: { value: 'Preview', severity: 'info' } };

export const Rounded: Story = {
  args: { value: 'New', rounded: true },
};

export const WithIcon: Story = {
  args: { value: 'Live', severity: 'success', icon: true },
  render: (args) => ({
    components: { Tag },
    setup() { return { args }; },
    template: `
      <Tag v-bind="args">
        <template #icon>
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4"/>
          </svg>
        </template>
      </Tag>
    `,
  }),
};
