import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import Accordion from '../Accordion.vue';
import AccordionPanel from '../AccordionPanel.vue';
import AccordionHeader from '../AccordionHeader.vue';
import AccordionContent from '../AccordionContent.vue';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

interface PanelDef {
  value: string;
  header: string;
  content: string;
  disabled?: boolean;
}

const defaultPanels: PanelDef[] = [
  { value: '1', header: 'Panel One',   content: 'Content One' },
  { value: '2', header: 'Panel Two',   content: 'Content Two' },
  { value: '3', header: 'Panel Three', content: 'Content Three', disabled: true },
];

function mountAccordion(
  panels: PanelDef[] = defaultPanels,
  accordionProps: Record<string, unknown> = {},
) {
  return mount(Accordion, {
    props: accordionProps,
    slots: {
      default: () =>
        panels.map(({ value, header, content, disabled }) =>
          h(AccordionPanel, { value, disabled }, {
            default: () => [
              h(AccordionHeader, {}, { default: () => header }),
              h(AccordionContent, {}, { default: () => content }),
            ],
          }),
        ),
    },
  });
}

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

describe('Accordion', () => {
  describe('rendering', () => {
    it('renders a header button for each panel', () => {
      const wrapper = mountAccordion();
      expect(wrapper.findAll('button')).toHaveLength(defaultPanels.length);
    });

    it('renders header text for each panel', () => {
      const wrapper = mountAccordion();
      expect(wrapper.text()).toContain('Panel One');
      expect(wrapper.text()).toContain('Panel Two');
      expect(wrapper.text()).toContain('Panel Three');
    });

    it('does not render content when all panels are closed', () => {
      const wrapper = mountAccordion();
      expect(wrapper.text()).not.toContain('Content One');
      expect(wrapper.text()).not.toContain('Content Two');
    });
  });

  // ---------------------------------------------------------------------------
  // Open / close
  // ---------------------------------------------------------------------------

  describe('open / close', () => {
    it('opens a panel on header click and shows content', async () => {
      const wrapper = mountAccordion();
      await wrapper.findAll('button')[0].trigger('click');
      expect(wrapper.text()).toContain('Content One');
    });

    it('closes an open panel on second click', async () => {
      const wrapper = mountAccordion();
      const btn = wrapper.findAll('button')[0];
      await btn.trigger('click');
      await btn.trigger('click');
      expect(wrapper.text()).not.toContain('Content One');
    });

    it('sets aria-expanded="true" on an open header', async () => {
      const wrapper = mountAccordion();
      const btn = wrapper.findAll('button')[0];
      await btn.trigger('click');
      expect(btn.attributes('aria-expanded')).toBe('true');
    });

    it('sets aria-expanded="false" on a closed header', () => {
      const wrapper = mountAccordion();
      expect(wrapper.findAll('button')[0].attributes('aria-expanded')).toBe('false');
    });
  });

  // ---------------------------------------------------------------------------
  // update:value emit
  // ---------------------------------------------------------------------------

  describe('update:value emit', () => {
    it('emits update:value with the opened panel value', async () => {
      const wrapper = mountAccordion();
      await wrapper.findAll('button')[0].trigger('click');
      expect(wrapper.emitted('update:value')?.[0]).toEqual(['1']);
    });

    it('emits update:value with empty string when the only open panel is closed', async () => {
      const wrapper = mountAccordion();
      const btn = wrapper.findAll('button')[0];
      await btn.trigger('click');
      await btn.trigger('click');
      expect(wrapper.emitted('update:value')?.[1]).toEqual(['']);
    });

    it('emits update:value with an array of values in multiple mode', async () => {
      const wrapper = mountAccordion(defaultPanels, { multiple: true });
      await wrapper.findAll('button')[0].trigger('click');
      await wrapper.findAll('button')[1].trigger('click');
      const emissions = wrapper.emitted('update:value') as string[][];
      expect(emissions[emissions.length - 1]).toEqual([['1', '2']]);
    });
  });

  // ---------------------------------------------------------------------------
  // value prop — initial open state
  // ---------------------------------------------------------------------------

  describe('value prop', () => {
    it('opens the panel matching the value prop on mount', () => {
      const wrapper = mountAccordion(defaultPanels, { value: '2' });
      expect(wrapper.text()).toContain('Content Two');
      expect(wrapper.text()).not.toContain('Content One');
    });

    it('opens multiple panels when value is an array (multiple mode)', () => {
      const wrapper = mountAccordion(defaultPanels, { multiple: true, value: ['1', '2'] });
      expect(wrapper.text()).toContain('Content One');
      expect(wrapper.text()).toContain('Content Two');
    });

    it('reacts to value prop changes', async () => {
      const wrapper = mountAccordion(defaultPanels, { value: '1' });
      expect(wrapper.text()).toContain('Content One');
      await wrapper.setProps({ value: '2' });
      expect(wrapper.text()).not.toContain('Content One');
      expect(wrapper.text()).toContain('Content Two');
    });
  });

  // ---------------------------------------------------------------------------
  // Single mode (default)
  // ---------------------------------------------------------------------------

  describe('single mode (default)', () => {
    it('closes the previously open panel when a new one is opened', async () => {
      const wrapper = mountAccordion();
      await wrapper.findAll('button')[0].trigger('click');
      await wrapper.findAll('button')[1].trigger('click');
      expect(wrapper.text()).not.toContain('Content One');
      expect(wrapper.text()).toContain('Content Two');
    });
  });

  // ---------------------------------------------------------------------------
  // Multiple mode
  // ---------------------------------------------------------------------------

  describe('multiple mode', () => {
    it('keeps multiple panels open simultaneously', async () => {
      const wrapper = mountAccordion(defaultPanels, { multiple: true });
      await wrapper.findAll('button')[0].trigger('click');
      await wrapper.findAll('button')[1].trigger('click');
      expect(wrapper.text()).toContain('Content One');
      expect(wrapper.text()).toContain('Content Two');
    });

    it('closes one panel without affecting the others', async () => {
      const wrapper = mountAccordion(defaultPanels, { multiple: true });
      await wrapper.findAll('button')[0].trigger('click');
      await wrapper.findAll('button')[1].trigger('click');
      await wrapper.findAll('button')[0].trigger('click');
      expect(wrapper.text()).not.toContain('Content One');
      expect(wrapper.text()).toContain('Content Two');
    });
  });

  // ---------------------------------------------------------------------------
  // Disabled panel
  // ---------------------------------------------------------------------------

  describe('disabled panel', () => {
    it('does not open a disabled panel on click', async () => {
      const wrapper = mountAccordion();
      await wrapper.findAll('button')[2].trigger('click');
      expect(wrapper.text()).not.toContain('Content Three');
    });

    it('applies accordion-header--disabled class to a disabled header', () => {
      const wrapper = mountAccordion();
      expect(wrapper.findAll('button')[2].classes()).toContain('accordion-header--disabled');
    });

    it('does not emit update:value when a disabled panel is clicked', async () => {
      const wrapper = mountAccordion();
      await wrapper.findAll('button')[2].trigger('click');
      expect(wrapper.emitted('update:value')).toBeFalsy();
    });
  });

  // ---------------------------------------------------------------------------
  // Active header class
  // ---------------------------------------------------------------------------

  describe('active header class', () => {
    it('applies accordion-header--active when a panel is open', async () => {
      const wrapper = mountAccordion();
      const btn = wrapper.findAll('button')[0];
      await btn.trigger('click');
      expect(btn.classes()).toContain('accordion-header--active');
    });

    it('removes accordion-header--active when a panel is closed', async () => {
      const wrapper = mountAccordion();
      const btn = wrapper.findAll('button')[0];
      await btn.trigger('click');
      await btn.trigger('click');
      expect(btn.classes()).not.toContain('accordion-header--active');
    });
  });

  // ---------------------------------------------------------------------------
  // Slot content
  // ---------------------------------------------------------------------------

  describe('slot content', () => {
    it('renders rich slot content inside an open panel', async () => {
      const wrapper = mount(Accordion, {
        slots: {
          default: () =>
            h(AccordionPanel, { value: 'a' }, {
              default: () => [
                h(AccordionHeader, {}, { default: () => 'Rich Panel' }),
                h(AccordionContent, {}, {
                  default: () => h('ul', {}, [
                    h('li', {}, 'Item One'),
                    h('li', {}, 'Item Two'),
                  ]),
                }),
              ],
            }),
        },
      });
      await wrapper.find('button').trigger('click');
      expect(wrapper.find('ul').exists()).toBe(true);
      expect(wrapper.text()).toContain('Item One');
      expect(wrapper.text()).toContain('Item Two');
    });

    it('hides slot content when the panel is closed', async () => {
      const wrapper = mount(Accordion, {
        slots: {
          default: () =>
            h(AccordionPanel, { value: 'a' }, {
              default: () => [
                h(AccordionHeader, {}, { default: () => 'Panel' }),
                h(AccordionContent, {}, { default: () => h('span', { 'data-testid': 'content' }, 'Hidden') }),
              ],
            }),
        },
      });
      expect(wrapper.find('[data-testid="content"]').exists()).toBe(false);
    });
  });
});
