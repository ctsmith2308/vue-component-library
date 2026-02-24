import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Heading from '../Heading.vue';

describe('Heading', () => {
  describe('tag rendering', () => {
    /** TODO: Test is rendering size=%d as NaN for test name. Need to figure out why it block description is off. */
    it.each([1, 2, 3, 4, 5])('renders <h%d> for size=%d', (size) => {
      const wrapper = mount(Heading, { props: { size } });

      expect(wrapper.find(`h${size}`).exists()).toBe(true);
    });
  });

  describe('size classes', () => {
    it.each([
      [1, 'text-heading-1'],
      [2, 'text-heading-2'],
      [3, 'text-heading-3'],
      [4, 'text-heading-4'],
      [5, 'text-heading-5'],
    ] as const)('size=%d applies %s', (size, expected) => {
      const wrapper = mount(Heading, { props: { size } });

      expect(wrapper.find(`h${size}`).classes()).toContain(expected);
    });

    it('always includes text-content-text', () => {
      [1, 2, 3, 4, 5].forEach((size) => {
        const wrapper = mount(Heading, { props: { size } });
        expect(wrapper.find(`h${size}`).classes()).toContain('text-content-text');
      });
    });
  });

  describe('slot', () => {
    it('renders slot content', () => {
      const wrapper = mount(Heading, {
        props: { size: 1 },
        slots: { default: 'Page Title' },
      });
      expect(wrapper.text()).toBe('Page Title');
    });
  });
});
