import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Accordion from '../Accordion.vue';

const tabs = [
  { header: 'Tab One',   content: 'Content One' },
  { header: 'Tab Two',   content: 'Content Two' },
  { header: 'Tab Three', content: 'Content Three', disabled: true },
];

describe('Accordion', () => {

  describe('rendering', () => {
    it('renders a button for each tab', () => {
      const wrapper = mount(Accordion, { props: { tabs } });
      expect(wrapper.findAll('button')).toHaveLength(tabs.length);
    });

    it('renders header text for each tab', () => {
      const wrapper = mount(Accordion, { props: { tabs } });
      expect(wrapper.text()).toContain('Tab One');
      expect(wrapper.text()).toContain('Tab Two');
    });

    it('does not render content when tab is closed', () => {
      const wrapper = mount(Accordion, { props: { tabs } });
      expect(wrapper.text()).not.toContain('Content One');
    });
  });

  describe('open / close', () => {
    it('opens a tab on click and shows content', async () => {
      const wrapper = mount(Accordion, { props: { tabs } });
      await wrapper.findAll('button')[0].trigger('click');
      expect(wrapper.text()).toContain('Content One');
    });

    it('emits tabOpen with correct index', async () => {
      const wrapper = mount(Accordion, { props: { tabs } });
      await wrapper.findAll('button')[1].trigger('click');
      expect(wrapper.emitted('tabOpen')?.[0]).toEqual([1]);
    });

    it('closes an open tab on second click', async () => {
      const wrapper = mount(Accordion, { props: { tabs } });
      const btn = wrapper.findAll('button')[0];
      await btn.trigger('click');
      await btn.trigger('click');
      expect(wrapper.text()).not.toContain('Content One');
    });

    it('emits tabClose when tab is closed', async () => {
      const wrapper = mount(Accordion, { props: { tabs } });
      const btn = wrapper.findAll('button')[0];
      await btn.trigger('click');
      await btn.trigger('click');
      expect(wrapper.emitted('tabClose')?.[0]).toEqual([0]);
    });

    it('sets aria-expanded=true on open tab', async () => {
      const wrapper = mount(Accordion, { props: { tabs } });
      const btn = wrapper.findAll('button')[0];
      await btn.trigger('click');
      expect(btn.attributes('aria-expanded')).toBe('true');
    });

    it('sets aria-expanded=false on closed tab', () => {
      const wrapper = mount(Accordion, { props: { tabs } });
      expect(wrapper.findAll('button')[0].attributes('aria-expanded')).toBe('false');
    });
  });

  describe('single mode (default)', () => {
    it('closes previously open tab when a new one opens', async () => {
      const wrapper = mount(Accordion, { props: { tabs } });
      await wrapper.findAll('button')[0].trigger('click');
      await wrapper.findAll('button')[1].trigger('click');
      expect(wrapper.text()).not.toContain('Content One');
      expect(wrapper.text()).toContain('Content Two');
    });
  });

  describe('multiple mode', () => {
    it('keeps multiple tabs open simultaneously', async () => {
      const wrapper = mount(Accordion, { props: { tabs, multiple: true } });
      await wrapper.findAll('button')[0].trigger('click');
      await wrapper.findAll('button')[1].trigger('click');
      expect(wrapper.text()).toContain('Content One');
      expect(wrapper.text()).toContain('Content Two');
    });
  });

  describe('activeIndex prop', () => {
    it('opens tab at activeIndex on mount', () => {
      const wrapper = mount(Accordion, { props: { tabs, activeIndex: 1 } });
      expect(wrapper.text()).toContain('Content Two');
    });

    it('opens multiple tabs when activeIndex is an array', () => {
      const wrapper = mount(Accordion, { props: { tabs, multiple: true, activeIndex: [0, 1] } });
      expect(wrapper.text()).toContain('Content One');
      expect(wrapper.text()).toContain('Content Two');
    });
  });

  describe('disabled tab', () => {
    it('does not open a disabled tab on click', async () => {
      const wrapper = mount(Accordion, { props: { tabs } });
      await wrapper.findAll('button')[2].trigger('click');
      expect(wrapper.text()).not.toContain('Content Three');
    });

    it('applies accordion-header--disabled class to disabled tab', () => {
      const wrapper = mount(Accordion, { props: { tabs } });
      expect(wrapper.findAll('button')[2].classes()).toContain('accordion-header--disabled');
    });
  });

  describe('active header class', () => {
    it('applies accordion-header--active when tab is open', async () => {
      const wrapper = mount(Accordion, { props: { tabs } });
      const btn = wrapper.findAll('button')[0];
      await btn.trigger('click');
      expect(btn.classes()).toContain('accordion-header--active');
    });

    it('removes accordion-header--active when tab is closed', async () => {
      const wrapper = mount(Accordion, { props: { tabs } });
      const btn = wrapper.findAll('button')[0];
      await btn.trigger('click');
      await btn.trigger('click');
      expect(btn.classes()).not.toContain('accordion-header--active');
    });
  });

});
