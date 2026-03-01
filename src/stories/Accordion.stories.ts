import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from '@/blocks';

const meta = {
  title: 'Layout/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  args: {
    multiple: false,
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Accordion, AccordionPanel, AccordionHeader, AccordionContent },
    setup() { return { args }; },
    template: `
      <Accordion v-bind="args" value="1">
        <AccordionPanel value="1">
          <AccordionHeader>What is a component library?</AccordionHeader>
          <AccordionContent>
            <p class="text-sm">A component library is a collection of reusable UI components that can be used across projects to maintain consistency and speed up development.</p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>How do I install this library?</AccordionHeader>
          <AccordionContent>
            <p class="text-sm">Install via npm: <code>npm install @your-org/blocks</code>, then import individual components as needed.</p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="3">
          <AccordionHeader>Is TypeScript supported?</AccordionHeader>
          <AccordionContent>
            <p class="text-sm">Yes, all components are written in TypeScript and ship with full type definitions.</p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    `,
  }),
};

export const MultipleOpen: Story = {
  args: { multiple: true },
  render: (args) => ({
    components: { Accordion, AccordionPanel, AccordionHeader, AccordionContent },
    setup() { return { args }; },
    template: `
      <Accordion v-bind="args">
        <AccordionPanel value="1">
          <AccordionHeader>First panel</AccordionHeader>
          <AccordionContent><p class="text-sm">Multiple panels can be open simultaneously.</p></AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>Second panel</AccordionHeader>
          <AccordionContent><p class="text-sm">This panel can also be open at the same time.</p></AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="3">
          <AccordionHeader>Third panel</AccordionHeader>
          <AccordionContent><p class="text-sm">And so can this one.</p></AccordionContent>
        </AccordionPanel>
      </Accordion>
    `,
  }),
};

export const WithDisabledPanel: Story = {
  render: (args) => ({
    components: { Accordion, AccordionPanel, AccordionHeader, AccordionContent },
    setup() { return { args }; },
    template: `
      <Accordion v-bind="args" value="1">
        <AccordionPanel value="1">
          <AccordionHeader>Available</AccordionHeader>
          <AccordionContent><p class="text-sm">This panel is interactive.</p></AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2" :disabled="true">
          <AccordionHeader>Disabled</AccordionHeader>
          <AccordionContent><p class="text-sm">Unreachable while disabled.</p></AccordionContent>
        </AccordionPanel>
      </Accordion>
    `,
  }),
};

export const RichContent: Story = {
  render: (args) => ({
    components: { Accordion, AccordionPanel, AccordionHeader, AccordionContent },
    setup() { return { args }; },
    template: `
      <Accordion v-bind="args" value="team">
        <AccordionPanel value="team">
          <AccordionHeader>Team members</AccordionHeader>
          <AccordionContent>
            <ul class="text-sm space-y-2 list-none p-0">
              <li class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">JD</span>
                Jane Doe — Engineering Lead
              </li>
              <li class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">JS</span>
                John Smith — Design Lead
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="stats">
          <AccordionHeader>Project stats</AccordionHeader>
          <AccordionContent>
            <div class="grid grid-cols-3 gap-3 text-center text-sm">
              <div class="p-2 bg-surface-alt rounded"><div class="font-bold text-lg">26</div>Components</div>
              <div class="p-2 bg-surface-alt rounded"><div class="font-bold text-lg">100%</div>TypeScript</div>
              <div class="p-2 bg-surface-alt rounded"><div class="font-bold text-lg">v4</div>Tailwind</div>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    `,
  }),
};
