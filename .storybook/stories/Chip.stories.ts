import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { Chip } from '@/blocks';

const meta = {
  title: 'Misc/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'success', 'danger'] },
  },
  args: {
    label: 'Frontend',
    color: 'primary',
    removable: false,
    icon: false,
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = { args: { label: 'Design', color: 'secondary' } };
export const Success: Story = { args: { label: 'Approved', color: 'success' } };
export const Danger: Story = { args: { label: 'Rejected', color: 'danger' } };

export const Removable: Story = {
  args: { label: 'TypeScript', removable: true },
};

export const WithImage: Story = {
  args: {
    label: 'Jane Doe',
    image: 'https://i.pravatar.cc/150?img=3',
  },
};

export const WithIcon: Story = {
  args: { label: 'Verified', icon: true },
  render: (args) => ({
    components: { Chip },
    setup() { return { args }; },
    template: `
      <Chip v-bind="args">
        <template #icon>
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </template>
      </Chip>
    `,
  }),
};
