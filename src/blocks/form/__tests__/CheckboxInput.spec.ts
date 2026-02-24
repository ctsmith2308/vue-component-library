import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CheckboxInput from '../CheckboxInput.vue';

const data = { id: 'terms', label: 'Accept terms', value: 'yes' };

describe('CheckboxInput', () => {

  describe('rendering', () => {
    it('renders a hidden native checkbox', () => {
      const wrapper = mount(CheckboxInput, { props: { data, name: 'terms' } });
      expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
    });

    it('renders the label text', () => {
      const wrapper = mount(CheckboxInput, { props: { data, name: 'terms' } });
      expect(wrapper.text()).toContain('Accept terms');
    });
  });

  describe('checked state', () => {
    it('initialises unchecked by default', () => {
      const wrapper = mount(CheckboxInput, { props: { data, name: 'terms' } });
      expect((wrapper.find('input').element as HTMLInputElement).checked).toBe(false);
    });

    it('initialises checked when data.checked=true', () => {
      const wrapper = mount(CheckboxInput, {
        props: { data: { ...data, checked: true }, name: 'terms' },
      });
      expect((wrapper.find('input').element as HTMLInputElement).checked).toBe(true);
    });

    it('initialises from modelValue when provided', () => {
      const wrapper = mount(CheckboxInput, {
        props: { data, name: 'terms', modelValue: true },
      });
      expect((wrapper.find('input').element as HTMLInputElement).checked).toBe(true);
    });
  });

  describe('events', () => {
    it('emits update:modelValue on change', async () => {
      const wrapper = mount(CheckboxInput, { props: { data, name: 'terms' } });
      await wrapper.find('input').setValue(true);
      expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    });

    it('emits change event on toggle', async () => {
      const wrapper = mount(CheckboxInput, { props: { data, name: 'terms' } });
      await wrapper.find('input').setValue(true);
      expect(wrapper.emitted('change')).toBeTruthy();
    });
  });

  describe('visual checkbox', () => {
    it('applies checked classes when checked', async () => {
      const wrapper = mount(CheckboxInput, {
        props: { data, name: 'terms', modelValue: true },
      });
      const visual = wrapper.find('span.border-2');
      expect(visual.classes()).toContain('bg-brand');
      expect(visual.classes()).toContain('border-brand');
    });

    it('applies unchecked classes when unchecked', () => {
      const wrapper = mount(CheckboxInput, { props: { data, name: 'terms' } });
      const visual = wrapper.find('span.border-2');
      expect(visual.classes()).toContain('bg-transparent');
    });
  });

});
