import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';

import { Popover, Button } from '@/blocks';

const meta = {
  title: 'Overlay/Popover',
  component: Popover,
  tags: ['autodocs'],
  args: {
    dismissable: true,
    showCloseIcon: false,
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

// Popover uses an imperative API (expose: show/hide/toggle), so we use render functions
export const Default: Story = {
  render: (args) => ({
    components: { Popover, Button },
    setup() {
      const pop = ref();
      return { pop, args };
    },
    template: `
      <div class="flex justify-center p-16">
        <Button label="Click me" @click="pop.toggle($event)" />
        <Popover ref="pop" v-bind="args">
          <p class="text-sm">This is a popover with some helpful content inside.</p>
        </Popover>
      </div>
    `,
  }),
};

export const WithCloseIcon: Story = {
  args: { showCloseIcon: true },
  render: (args) => ({
    components: { Popover, Button },
    setup() {
      const pop = ref();
      return { pop, args };
    },
    template: `
      <div class="flex justify-center p-16">
        <Button label="Open Popover" @click="pop.toggle($event)" />
        <Popover ref="pop" v-bind="args">
          <p class="text-sm font-semibold mb-1">Detailed info</p>
          <p class="text-sm text-gray-500">Use the × button or click outside to dismiss.</p>
        </Popover>
      </div>
    `,
  }),
};

export const NonDismissable: Story = {
  args: { dismissable: false, showCloseIcon: true },
  render: (args) => ({
    components: { Popover, Button },
    setup() {
      const pop = ref();
      return { pop, args };
    },
    template: `
      <div class="flex justify-center p-16">
        <Button label="Open (close via × only)" @click="pop.toggle($event)" />
        <Popover ref="pop" v-bind="args">
          <p class="text-sm">Outside clicks won't close this — use the × button.</p>
        </Popover>
      </div>
    `,
  }),
};
