import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ProgressBar from '../ProgressBar.vue';

describe('ProgressBar', () => {

  describe('rendering', () => {
    it('renders the progressbar role', () => {
      const wrapper = mount(ProgressBar);
      expect(wrapper.find('[role="progressbar"]').exists()).toBe(true);
    });

    it('renders the fill div in determinate mode', () => {
      const wrapper = mount(ProgressBar, { props: { value: 50 } });
      expect(wrapper.find('.progress-fill').exists()).toBe(true);
    });

    it('renders the indeterminate div in indeterminate mode', () => {
      const wrapper = mount(ProgressBar, { props: { mode: 'indeterminate' } });
      expect(wrapper.find('.progress-indeterminate').exists()).toBe(true);
      expect(wrapper.find('.progress-fill').exists()).toBe(false);
    });
  });

  describe('value clamping', () => {
    it('sets width to value% for normal values', () => {
      const wrapper = mount(ProgressBar, { props: { value: 60 } });
      expect(wrapper.find('.progress-fill').attributes('style')).toContain('width: 60%');
    });

    it('clamps value to 100 when above 100', () => {
      const wrapper = mount(ProgressBar, { props: { value: 150 } });
      expect(wrapper.find('.progress-fill').attributes('style')).toContain('width: 100%');
    });

    it('clamps value to 0 when below 0', () => {
      const wrapper = mount(ProgressBar, { props: { value: -20 } });
      expect(wrapper.find('.progress-fill').attributes('style')).toContain('width: 0%');
    });
  });

  describe('aria attributes', () => {
    it('sets aria-valuenow to clamped value in determinate mode', () => {
      const wrapper = mount(ProgressBar, { props: { value: 40 } });
      expect(wrapper.find('[role="progressbar"]').attributes('aria-valuenow')).toBe('40');
    });

    it('does not set aria-valuenow in indeterminate mode', () => {
      const wrapper = mount(ProgressBar, { props: { mode: 'indeterminate' } });
      expect(wrapper.find('[role="progressbar"]').attributes('aria-valuenow')).toBeUndefined();
    });

    it('always sets aria-valuemin=0 and aria-valuemax=100', () => {
      const wrapper = mount(ProgressBar);
      const track = wrapper.find('[role="progressbar"]');
      expect(track.attributes('aria-valuemin')).toBe('0');
      expect(track.attributes('aria-valuemax')).toBe('100');
    });
  });

  describe('color classes', () => {
    it.each([
      ['primary',   'bg-brand'],
      ['secondary', 'bg-secondary'],
      ['success',   'bg-success'],
      ['danger',    'bg-danger'],
    ] as const)('%s color applies correct fill class', (color, expected) => {
      const wrapper = mount(ProgressBar, { props: { value: 50, color } });
      expect(wrapper.find('.progress-fill').classes()).toContain(expected);
    });
  });

  describe('showValue', () => {
    it('does not render value text by default', () => {
      const wrapper = mount(ProgressBar, { props: { value: 50 } });
      expect(wrapper.text()).toBe('');
    });

    it('renders rounded value text when showValue=true', () => {
      const wrapper = mount(ProgressBar, { props: { value: 66.6, showValue: true } });
      expect(wrapper.text()).toBe('67%');
    });

    it('does not render value text in indeterminate mode even with showValue=true', () => {
      const wrapper = mount(ProgressBar, { props: { mode: 'indeterminate', showValue: true } });
      expect(wrapper.text()).toBe('');
    });
  });

  describe('height', () => {
    it('applies custom height via inline style', () => {
      const wrapper = mount(ProgressBar, { props: { height: '2rem' } });
      expect(wrapper.find('[role="progressbar"]').attributes('style')).toContain('height: 2rem');
    });
  });

});
