import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SelectInput from '../SelectInput.vue';

const data = {
  id: 'colour',
  label: 'Colour',
  options: [
    { value: 'red',   displayValue: 'Red' },
    { value: 'green', displayValue: 'Green' },
    { value: 'blue',  displayValue: 'Blue' },
  ],
};

describe('SelectInput', () => {

  describe('rendering', () => {
    it('renders the trigger button', () => {
      const wrapper = mount(SelectInput, { props: { data, name: 'colour' } });
      expect(wrapper.find('button[type="button"]').exists()).toBe(true);
    });

    it('shows the first option as selected by default', () => {
      const wrapper = mount(SelectInput, { props: { data, name: 'colour' } });
      expect(wrapper.find('button').text()).toContain('Red');
    });

    it('hides the dropdown initially', () => {
      const wrapper = mount(SelectInput, { props: { data, name: 'colour' } });
      expect(wrapper.find('[role="listbox"]').exists()).toBe(false);
    });
  });

  describe('opening dropdown', () => {
    it('shows dropdown on trigger click', async () => {
      const wrapper = mount(SelectInput, { props: { data, name: 'colour' } });
      await wrapper.find('button[type="button"]').trigger('click');
      expect(wrapper.find('[role="listbox"]').exists()).toBe(true);
    });

    it('renders all options in dropdown', async () => {
      const wrapper = mount(SelectInput, { props: { data, name: 'colour' } });
      await wrapper.find('button[type="button"]').trigger('click');
      expect(wrapper.findAll('[role="option"]')).toHaveLength(data.options.length);
    });

    it('closes dropdown after selecting an option', async () => {
      const wrapper = mount(SelectInput, { props: { data, name: 'colour' } });
      await wrapper.find('button[type="button"]').trigger('click');
      await wrapper.findAll('[role="option"]')[1].trigger('click');
      expect(wrapper.find('[role="listbox"]').exists()).toBe(false);
    });

    it('updates displayed value after selection', async () => {
      const wrapper = mount(SelectInput, { props: { data, name: 'colour' } });
      await wrapper.find('button[type="button"]').trigger('click');
      await wrapper.findAll('[role="option"]')[1].trigger('click');
      expect(wrapper.find('button').text()).toContain('Green');
    });
  });

  describe('aria attributes', () => {
    it('sets aria-expanded=false when closed', () => {
      const wrapper = mount(SelectInput, { props: { data, name: 'colour' } });
      expect(wrapper.find('button').attributes('aria-expanded')).toBe('false');
    });

    it('sets aria-expanded=true when open', async () => {
      const wrapper = mount(SelectInput, { props: { data, name: 'colour' } });
      await wrapper.find('button').trigger('click');
      expect(wrapper.find('button').attributes('aria-expanded')).toBe('true');
    });

    it('marks selected option with aria-selected=true', async () => {
      const wrapper = mount(SelectInput, { props: { data, name: 'colour' } });
      await wrapper.find('button').trigger('click');
      const selected = wrapper.findAll('[role="option"]')[0];
      expect(selected.attributes('aria-selected')).toBe('true');
    });
  });

});
