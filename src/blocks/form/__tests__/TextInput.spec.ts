import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TextInput from '../TextInput.vue';

describe('TextInput', () => {

  describe('rendering', () => {
    it('renders an input element', () => {
      const wrapper = mount(TextInput, { props: { name: 'email' } });
      expect(wrapper.find('input').exists()).toBe(true);
    });

    it('renders label when provided', () => {
      const wrapper = mount(TextInput, { props: { name: 'email', label: 'Email' } });
      expect(wrapper.text()).toContain('Email');
    });

    it('does not render label when not provided', () => {
      const wrapper = mount(TextInput, { props: { name: 'email' } });
      expect(wrapper.find('label').exists()).toBe(false);
    });

    it('passes type prop to input', () => {
      const wrapper = mount(TextInput, { props: { name: 'email', type: 'email' } });
      expect(wrapper.find('input').attributes('type')).toBe('email');
    });

    it('passes placeholder to input', () => {
      const wrapper = mount(TextInput, { props: { name: 'q', placeholder: 'Search...' } });
      expect(wrapper.find('input').attributes('placeholder')).toBe('Search...');
    });

    it('passes name to input', () => {
      const wrapper = mount(TextInput, { props: { name: 'username' } });
      expect(wrapper.find('input').attributes('name')).toBe('username');
    });
  });

  describe('disabled state', () => {
    it('sets disabled attribute on input', () => {
      const wrapper = mount(TextInput, { props: { name: 'x', disabled: true } });
      expect(wrapper.find('input').attributes('disabled')).toBeDefined();
    });

    it('applies opacity and cursor classes when disabled', () => {
      const wrapper = mount(TextInput, { props: { name: 'x', disabled: true } });
      expect(wrapper.find('input').classes()).toContain('opacity-50');
      expect(wrapper.find('input').classes()).toContain('cursor-not-allowed');
    });
  });

  describe('v-model behaviour', () => {
    it('emits update:modelValue on input', async () => {
      const wrapper = mount(TextInput, { props: { name: 'x', modelValue: '' } });
      await wrapper.find('input').setValue('hello');
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['hello']);
    });

    it('reflects modelValue in input', () => {
      const wrapper = mount(TextInput, { props: { name: 'x', modelValue: 'preset' } });
      expect((wrapper.find('input').element as HTMLInputElement).value).toBe('preset');
    });
  });

  describe('fluid', () => {
    it('applies w-full to wrapper when fluid=true', () => {
      const wrapper = mount(TextInput, { props: { name: 'x', fluid: true } });
      expect(wrapper.find('div').classes()).toContain('w-full');
    });
  });

  describe('slots', () => {
    it('renders prefix slot', () => {
      const wrapper = mount(TextInput, {
        props: { name: 'x' },
        slots: { prefix: '<span data-testid="prefix">@</span>' },
      });
      expect(wrapper.find('[data-testid="prefix"]').exists()).toBe(true);
    });

    it('renders suffix slot', () => {
      const wrapper = mount(TextInput, {
        props: { name: 'x' },
        slots: { suffix: '<span data-testid="suffix">✓</span>' },
      });
      expect(wrapper.find('[data-testid="suffix"]').exists()).toBe(true);
    });
  });

});
