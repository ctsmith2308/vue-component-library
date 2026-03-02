import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DatePicker from '../DatePicker.vue';

describe('DatePicker', () => {

  describe('rendering', () => {
    it('renders the trigger button', () => {
      const wrapper = mount(DatePicker);
      expect(wrapper.find('button[type="button"]').exists()).toBe(true);
    });

    it('shows placeholder text when no date selected', () => {
      const wrapper = mount(DatePicker, { props: { placeholder: 'Pick a date' } });
      expect(wrapper.text()).toContain('Pick a date');
    });

    it('shows formatted date when modelValue is provided', () => {
      const date = new Date(2025, 0, 15); // Jan 15, 2025
      const wrapper = mount(DatePicker, { props: { modelValue: date } });
      expect(wrapper.text()).toContain('Jan');
      expect(wrapper.text()).toContain('15');
      expect(wrapper.text()).toContain('2025');
    });

    it('hides calendar initially', () => {
      const wrapper = mount(DatePicker);
      // calendar grid only renders when showCalendar=true
      expect(wrapper.find('.grid.grid-cols-7').exists()).toBe(false);
    });
  });

  describe('open / close', () => {
    it('shows calendar on trigger click', async () => {
      const wrapper = mount(DatePicker);
      await wrapper.find('button[type="button"]').trigger('click');
      expect(wrapper.find('.grid.grid-cols-7').exists()).toBe(true);
    });

    it('does not open when disabled=true', async () => {
      const wrapper = mount(DatePicker, { props: { disabled: true } });
      await wrapper.find('button[type="button"]').trigger('click');
      expect(wrapper.find('.grid.grid-cols-7').exists()).toBe(false);
    });
  });

  describe('date selection', () => {
    it('emits update:modelValue when a day is clicked', async () => {
      const wrapper = mount(DatePicker);
      await wrapper.find('button[type="button"]').trigger('click');
      // click the first non-null day button
      const dayButtons = wrapper.findAll('.grid.grid-cols-7 button').filter(
        (b) => b.text() !== '',
      );
      await dayButtons[0]!.trigger('click');
      const emitted = wrapper.emitted('update:modelValue');
      expect(emitted).toBeTruthy();
      expect(emitted![0]![0]).toBeInstanceOf(Date);
    });

    it('closes calendar after selecting a date', async () => {
      const wrapper = mount(DatePicker);
      await wrapper.find('button[type="button"]').trigger('click');
      const dayButtons = wrapper.findAll('.grid.grid-cols-7 button').filter(
        (b) => b.text() !== '',
      );
      await dayButtons[0]!.trigger('click');
      expect(wrapper.find('.grid.grid-cols-7').exists()).toBe(false);
    });
  });

  describe('disabled state', () => {
    it('applies opacity-50 and cursor-not-allowed when disabled', () => {
      const wrapper = mount(DatePicker, { props: { disabled: true } });
      expect(wrapper.find('button').classes()).toContain('opacity-50');
      expect(wrapper.find('button').classes()).toContain('cursor-not-allowed');
    });
  });

  describe('month navigation', () => {
    it('renders month navigation buttons when calendar is open', async () => {
      const wrapper = mount(DatePicker);
      await wrapper.find('button[type="button"]').trigger('click');
      // Ghost nav buttons rendered by Button component
      const navButtons = wrapper.findAll('button.btn');
      expect(navButtons.length).toBeGreaterThanOrEqual(2);
    });
  });

});
