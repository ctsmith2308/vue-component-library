import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { Panel } from '@/blocks';

const meta = {
  title: 'Surfaces/Panel',
  component: Panel,
  tags: ['autodocs'],
} satisfies Meta<typeof Panel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Panel },
    template: `
      <Panel>
        <p class="text-sm">This is a panel. It renders a bordered, padded surface useful for grouping related content.</p>
      </Panel>
    `,
  }),
};

export const WithHeading: Story = {
  render: () => ({
    components: { Panel },
    template: `
      <Panel>
        <h4 class="font-semibold text-sm mb-2">Account Details</h4>
        <p class="text-sm text-gray-500">Username: jane_doe</p>
        <p class="text-sm text-gray-500">Email: jane@example.com</p>
      </Panel>
    `,
  }),
};
