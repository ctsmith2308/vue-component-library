import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Tag from '../Tag.vue';

describe('Tag', () => {

  describe('rendering', () => {
    it('renders a <span> element', () => {
      const wrapper = mount(Tag, { props: { value: 'Label' } });
      expect(wrapper.element.tagName).toBe('SPAN');
    });

    it('renders the value text', () => {
      const wrapper = mount(Tag, { props: { value: 'Active' } });
      expect(wrapper.text()).toContain('Active');
    });
  });

  describe('severity classes', () => {
    it.each([
      ['primary',   'bg-brand',     'text-brand-contrast'],
      ['secondary', 'bg-secondary', 'text-secondary-contrast'],
      ['success',   'bg-success',   'text-success-contrast'],
      ['danger',    'bg-danger',    'text-danger-contrast'],
      ['warning',   'bg-warning',   'text-warning-contrast'],
      ['info',      'bg-info',      'text-info-contrast'],
    ] as const)('%s severity applies correct classes', (severity, bg, text) => {
      const wrapper = mount(Tag, { props: { value: 'X', severity } });
      expect(wrapper.classes()).toContain(bg);
      expect(wrapper.classes()).toContain(text);
    });

    it('defaults to primary severity', () => {
      const wrapper = mount(Tag, { props: { value: 'X' } });
      expect(wrapper.classes()).toContain('bg-brand');
    });
  });

  describe('shape', () => {
    it('applies rounded class by default', () => {
      const wrapper = mount(Tag, { props: { value: 'X' } });
      expect(wrapper.classes()).toContain('rounded');
      expect(wrapper.classes()).not.toContain('rounded-full');
    });

    it('applies rounded-full when rounded=true', () => {
      const wrapper = mount(Tag, { props: { value: 'X', rounded: true } });
      expect(wrapper.classes()).toContain('rounded-full');
    });
  });

  describe('icon slot', () => {
    it('does not render icon wrapper when icon=false', () => {
      const wrapper = mount(Tag, { props: { value: 'X', icon: false } });
      expect(wrapper.find('span.flex').exists()).toBe(false);
    });

    it('renders icon slot when icon=true', () => {
      const wrapper = mount(Tag, {
        props: { value: 'X', icon: true },
        slots: { icon: '<svg data-testid="icon" />' },
      });
      expect(wrapper.find('[data-testid="icon"]').exists()).toBe(true);
    });
  });

});
