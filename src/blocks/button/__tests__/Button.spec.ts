import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../Button.vue';

describe('Button', () => {
  // ─── Rendering ────────────────────────────────────────────────────────────

  describe('rendering', () => {
    it('renders a <button> element by default', () => {
      const wrapper = mount(Button, { props: { label: 'Click' } });
      expect(wrapper.element.tagName).toBe('BUTTON');
    });

    it('renders an <a> element when as="a"', () => {
      const wrapper = mount(Button, { props: { label: 'Link', as: 'a', href: '/go' } });
      expect(wrapper.element.tagName).toBe('A');
      expect(wrapper.attributes('href')).toBe('/go');
    });

    it('renders the label text', () => {
      const wrapper = mount(Button, { props: { label: 'Submit' } });
      expect(wrapper.text()).toContain('Submit');
    });

    it('renders icon slot content', () => {
      const wrapper = mount(Button, {
        props: { label: 'With Icon' },
        slots: { icon: '<svg data-testid="icon" />' },
      });
      expect(wrapper.find('[data-testid="icon"]').exists()).toBe(true);
    });

    it('renders ButtonSpinner when loading', () => {
      const wrapper = mount(Button, { props: { label: 'Loading', loading: true } });
      expect(wrapper.findComponent({ name: 'ButtonSpinner' }).exists()).toBe(true);
      expect(wrapper.text()).not.toContain('Loading');
    });
  });

  // ─── Classes ──────────────────────────────────────────────────────────────

  describe('color classes', () => {
    it('applies btn-primary by default', () => {
      const wrapper = mount(Button, { props: { label: 'X' } });
      expect(wrapper.classes()).toContain('btn-primary');
    });

    it('applies btn-secondary', () => {
      const wrapper = mount(Button, { props: { label: 'X', color: 'secondary' } });
      expect(wrapper.classes()).toContain('btn-secondary');
    });

    it('applies btn-success', () => {
      const wrapper = mount(Button, { props: { label: 'X', color: 'success' } });
      expect(wrapper.classes()).toContain('btn-success');
    });

    it('applies btn-danger', () => {
      const wrapper = mount(Button, { props: { label: 'X', color: 'danger' } });
      expect(wrapper.classes()).toContain('btn-danger');
    });
  });

  describe('variant classes', () => {
    it('applies btn-outlined-primary', () => {
      const wrapper = mount(Button, { props: { label: 'X', variant: 'outlined' } });
      expect(wrapper.classes()).toContain('btn-outlined-primary');
    });

    it('applies btn-text-primary', () => {
      const wrapper = mount(Button, { props: { label: 'X', variant: 'text' } });
      expect(wrapper.classes()).toContain('btn-text-primary');
    });

    it('applies btn-ghost', () => {
      const wrapper = mount(Button, { props: { label: 'X', variant: 'ghost' } });
      expect(wrapper.classes()).toContain('btn-ghost');
    });

    it('applies btn-link', () => {
      const wrapper = mount(Button, { props: { label: 'X', variant: 'link' } });
      expect(wrapper.classes()).toContain('btn-link');
    });
  });

  describe('size classes', () => {
    it.each([
      ['sm', 'btn-sm'],
      ['md', 'btn-md'],
      ['lg', 'btn-lg'],
      ['xl', 'btn-xl'],
      ['jumbo', 'btn-jumbo'],
    ] as const)('applies %s size class', (size, expected) => {
      const wrapper = mount(Button, { props: { label: 'X', size } });
      expect(wrapper.classes()).toContain(expected);
    });
  });

  describe('modifier classes', () => {
    it('applies btn-raised when raised=true', () => {
      const wrapper = mount(Button, { props: { label: 'X', raised: true } });
      expect(wrapper.classes()).toContain('btn-raised');
    });

    it('applies btn-rounded when rounded=true', () => {
      const wrapper = mount(Button, { props: { label: 'X', rounded: true } });
      expect(wrapper.classes()).toContain('btn-rounded');
    });

    it('applies btn-icon when icon slot provided with no label', () => {
      const wrapper = mount(Button, {
        slots: { icon: '<svg />' },
      });
      expect(wrapper.classes()).toContain('btn-icon');
    });

    it('applies btn-disabled when disabled=true', () => {
      const wrapper = mount(Button, { props: { label: 'X', disabled: true } });
      expect(wrapper.classes()).toContain('btn-disabled');
    });

    it('applies cursor-progress when loading=true', () => {
      const wrapper = mount(Button, { props: { label: 'X', loading: true } });
      expect(wrapper.classes()).toContain('cursor-progress');
    });
  });

  describe('icon position', () => {
    it('applies flex-row by default', () => {
      const wrapper = mount(Button, { props: { label: 'X' } });
      expect(wrapper.classes()).toContain('flex-row');
    });

    it('applies flex-row-reverse when iconPosition="right"', () => {
      const wrapper = mount(Button, { props: { label: 'X', iconPosition: 'right' } });
      expect(wrapper.classes()).toContain('flex-row-reverse');
    });
  });

  // ─── State ────────────────────────────────────────────────────────────────

  describe('disabled state', () => {
    it('sets disabled attribute when disabled=true', () => {
      const wrapper = mount(Button, { props: { label: 'X', disabled: true } });
      expect(wrapper.attributes('disabled')).toBeDefined();
    });

    it('sets disabled attribute when loading=true', () => {
      const wrapper = mount(Button, { props: { label: 'X', loading: true } });
      expect(wrapper.attributes('disabled')).toBeDefined();
    });

    it('disabled overrides color variant to btn-disabled', () => {
      const wrapper = mount(Button, { props: { label: 'X', color: 'danger', disabled: true } });
      expect(wrapper.classes()).toContain('btn-disabled');
      expect(wrapper.classes()).not.toContain('btn-danger');
    });
  });
});
