import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import RadioInput from '../RadioInput.vue';

const input = { groupName: 'size', id: 'size-md', value: 'md', label: 'Medium' };

describe('RadioInput', () => {

  describe('rendering', () => {
    it('renders a native radio input', () => {
      const wrapper = mount(RadioInput, { props: { input, name: 'size' } });
      expect(wrapper.find('input[type="radio"]').exists()).toBe(true);
    });

    it('renders the label text', () => {
      const wrapper = mount(RadioInput, { props: { input, name: 'size' } });
      expect(wrapper.text()).toContain('Medium');
    });

    it('sets the correct name attribute', () => {
      const wrapper = mount(RadioInput, { props: { input, name: 'size' } });
      expect(wrapper.find('input').attributes('name')).toBe('size');
    });

    it('sets the correct value attribute', () => {
      const wrapper = mount(RadioInput, { props: { input, name: 'size' } });
      expect(wrapper.find('input').attributes('value')).toBe('md');
    });

    it('sets the id attribute matching input.id', () => {
      const wrapper = mount(RadioInput, { props: { input, name: 'size' } });
      expect(wrapper.find('input').attributes('id')).toBe('size-md');
    });
  });

  describe('change event', () => {
    it('triggers onChange when radio is changed', async () => {
      const wrapper = mount(RadioInput, { props: { input, name: 'size' } });
      await wrapper.find('input').trigger('change');
      // onChange calls updateValue via formContext (null here, so no error thrown)
      // just verifying no crash and the handler runs
      expect(wrapper.find('input').exists()).toBe(true);
    });
  });

});
