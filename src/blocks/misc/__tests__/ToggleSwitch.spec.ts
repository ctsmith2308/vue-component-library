import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ToggleSwitch from '../ToggleSwitch.vue';

describe('ToggleSwitch', () => {
  describe('rendering', () => {
    it('renders a button with role="switch"', () => {
      const wrapper = mount(ToggleSwitch, { props: { modelValue: false } });
      expect(wrapper.find('button[role="switch"]').exists()).toBe(true);
    });

    it('renders label when provided', () => {
      const wrapper = mount(ToggleSwitch, { props: { modelValue: false, label: 'Dark mode' } });
      expect(wrapper.text()).toContain('Dark mode');
    });

    it('does not render label element when label is not provided', () => {
      const wrapper = mount(ToggleSwitch, { props: { modelValue: false } });
      expect(wrapper.find('label').exists()).toBe(false);
    });
  });

  describe('aria state', () => {
    it('sets aria-checked="true" when modelValue=true', () => {
      const wrapper = mount(ToggleSwitch, { props: { modelValue: true } });
      expect(wrapper.find('button').attributes('aria-checked')).toBe('true');
    });

    it('sets aria-checked="false" when modelValue=false', () => {
      const wrapper = mount(ToggleSwitch, { props: { modelValue: false } });
      expect(wrapper.find('button').attributes('aria-checked')).toBe('false');
    });
  });

  describe('track classes', () => {
    it('applies bg-brand when modelValue=true', () => {
      const wrapper = mount(ToggleSwitch, { props: { modelValue: true } });
      expect(wrapper.find('button').classes()).toContain('bg-brand');
    });

    it('applies bg-surface-border when modelValue=false', () => {
      const wrapper = mount(ToggleSwitch, { props: { modelValue: false } });
      expect(wrapper.find('button').classes()).toContain('bg-surface-border');
    });

    it('applies opacity-50 and cursor-not-allowed when disabled', () => {
      const wrapper = mount(ToggleSwitch, { props: { modelValue: false, disabled: true } });
      const btn = wrapper.find('button');
      expect(btn.classes()).toContain('opacity-50');
      expect(btn.classes()).toContain('cursor-not-allowed');
    });
  });

  describe('size classes', () => {
    it.each([
      ['sm', 'w-8', 'h-4'],
      ['md', 'w-11', 'h-6'],
      ['lg', 'w-14', 'h-7'],
    ] as const)('%s size applies correct track dimensions', (size, w, h) => {
      const wrapper = mount(ToggleSwitch, { props: { modelValue: false, size } });
      const btn = wrapper.find('button');
      expect(btn.classes()).toContain(w);
      expect(btn.classes()).toContain(h);
    });
  });

  describe('label position', () => {
    it('applies flex-row-reverse when labelPosition="left"', () => {
      const wrapper = mount(ToggleSwitch, {
        props: { modelValue: false, label: 'X', labelPosition: 'left' },
      });

      // the inner container div holds the position class
      const container = wrapper.find('#inner-wrapper');

      expect(container.classes()).toContain('flex-row-reverse');
    });

    it('does not apply flex-row-reverse when labelPosition="right" (default)', () => {
      const wrapper = mount(ToggleSwitch, {
        props: { modelValue: false, label: 'X' },
      });
      const container = wrapper.find('div > div');
      expect(container.classes()).not.toContain('flex-row-reverse');
    });
  });

  describe('interaction', () => {
    it('emits update:modelValue with toggled value on click', async () => {
      const wrapper = mount(ToggleSwitch, { props: { modelValue: false } });
      await wrapper.find('button').trigger('click');
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true]);
    });

    it('emits update:modelValue false when toggling from true', async () => {
      const wrapper = mount(ToggleSwitch, { props: { modelValue: true } });
      await wrapper.find('button').trigger('click');
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false]);
    });

    it('does not emit when disabled', async () => {
      const wrapper = mount(ToggleSwitch, { props: { modelValue: false, disabled: true } });
      await wrapper.find('button').trigger('click');
      expect(wrapper.emitted('update:modelValue')).toBeUndefined();
    });
  });
});
