import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';

import { Drawer, Button } from '@/blocks';

const meta = {
  title: 'Overlay/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['left', 'right', 'top', 'bottom'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'full'] },
  },
  args: {
    isOpen: false,
    position: 'left',
    size: 'md',
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

// Interactive wrapper since Drawer visibility requires toggling state
const DrawerTemplate = (position: string, size = 'md') => ({
  components: { Drawer, Button },
  setup() {
    const open = ref(false);
    return { open, position, size };
  },
  template: `
    <div>
      <Button label="Open Drawer" @click="open = true" />

      <Drawer :isOpen="open" :position="position" :size="size" @close="open = false">
        <template #header>
          <span class="font-semibold text-sm">Drawer Title</span>
        </template>

        <p class="text-sm text-gray-600">This is the drawer body content. You can place anything here.</p>

        <template #footer>
          <Button label="Close" variant="outlined" @click="open = false" />
        </template>
      </Drawer>
    </div>
  `,
});

export const Left: Story = {
  render: () => DrawerTemplate('left'),
};

export const Right: Story = {
  render: () => DrawerTemplate('right'),
};

export const Top: Story = {
  render: () => DrawerTemplate('top'),
};

export const Bottom: Story = {
  render: () => DrawerTemplate('bottom'),
};

export const Large: Story = {
  render: () => DrawerTemplate('right', 'lg'),
};

export const FullWidth: Story = {
  render: () => DrawerTemplate('right', 'full'),
};
