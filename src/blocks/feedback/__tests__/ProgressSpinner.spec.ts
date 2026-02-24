import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ProgressSpinner from '../ProgressSpinner.vue';

describe('ProgressSpinner', () => {

  describe('rendering', () => {
    it('renders an svg', () => {
      const wrapper = mount(ProgressSpinner);
      expect(wrapper.find('svg').exists()).toBe(true);
    });

    it('applies animate-spin class', () => {
      const wrapper = mount(ProgressSpinner);
      expect(wrapper.find('svg').classes()).toContain('animate-spin');
    });
  });

  describe('size classes', () => {
    it.each([
      ['sm', 'w-6',  'h-6'],
      ['md', 'w-10', 'h-10'],
      ['lg', 'w-16', 'h-16'],
      ['xl', 'w-24', 'h-24'],
    ] as const)('%s size applies correct dimensions', (size, w, h) => {
      const wrapper = mount(ProgressSpinner, { props: { size } });
      const svg = wrapper.find('svg');
      expect(svg.classes()).toContain(w);
      expect(svg.classes()).toContain(h);
    });
  });

  describe('color classes', () => {
    it.each([
      ['primary',   'text-brand'],
      ['secondary', 'text-secondary'],
      ['success',   'text-success'],
      ['danger',    'text-danger'],
    ] as const)('%s color applies correct class', (color, expected) => {
      const wrapper = mount(ProgressSpinner, { props: { color } });
      expect(wrapper.find('svg').classes()).toContain(expected);
    });
  });

  describe('strokeWidth', () => {
    it('passes strokeWidth to the circle element', () => {
      const wrapper = mount(ProgressSpinner, { props: { strokeWidth: '6' } });
      expect(wrapper.find('circle').attributes('stroke-width')).toBe('6');
    });
  });

});
