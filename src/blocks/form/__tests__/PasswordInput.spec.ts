import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import PasswordInput from '../PasswordInput.vue';

describe('PasswordInput', () => {

  describe('rendering', () => {
    it('renders a password input by default', () => {
      const wrapper = mount(PasswordInput, { props: { name: 'password' } });
      expect(wrapper.find('input[type="password"]').exists()).toBe(true);
    });

    it('renders the toggle button', () => {
      const wrapper = mount(PasswordInput, { props: { name: 'password' } });
      expect(wrapper.find('button').exists()).toBe(true);
    });
  });

  describe('visibility toggle', () => {
    it('switches input to type="text" after toggle click', async () => {
      const wrapper = mount(PasswordInput, { props: { name: 'password' } });
      await wrapper.find('button').trigger('click');
      expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    });

    it('switches back to type="password" on second click', async () => {
      const wrapper = mount(PasswordInput, { props: { name: 'password' } });
      await wrapper.find('button').trigger('click');
      await wrapper.find('button').trigger('click');
      expect(wrapper.find('input[type="password"]').exists()).toBe(true);
    });

    it('toggle button aria-label reflects visibility state', async () => {
      const wrapper = mount(PasswordInput, { props: { name: 'password' } });
      expect(wrapper.find('button').attributes('aria-label')).toBe('Show password');
      await wrapper.find('button').trigger('click');
      expect(wrapper.find('button').attributes('aria-label')).toBe('Hide password');
    });
  });

  describe('v-model', () => {
    it('emits update:modelValue on input', async () => {
      const wrapper = mount(PasswordInput, { props: { name: 'password', modelValue: '' } });
      await wrapper.find('input').setValue('secret123');
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['secret123']);
    });
  });

});
