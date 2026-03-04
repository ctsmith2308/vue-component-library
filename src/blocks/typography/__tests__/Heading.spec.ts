import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Heading from '../Heading.vue';
import type { HeadingSize } from '../types';

const headingSizes: HeadingSize[] = [1, 2, 3, 4, 5];

describe('Heading', () => {
  describe('tag rendering', () => {
    it.each(headingSizes)('renders <h%d>', (size) => {
      const wrapper = mount(Heading, { props: { size } });

      expect(wrapper.find(`h${size}`).exists()).toBe(true);
    });
  });

  describe('size classes', () => {
    it.each([
      [1, 'text-5xl'],
      [2, 'text-4xl'],
      [3, 'text-3xl'],
      [4, 'text-2xl'],
      [5, 'text-xl'],
    ] as const)('size=%d applies %s', (size, expected) => {
      const wrapper = mount(Heading, { props: { size } });

      expect(wrapper.find(`h${size}`).classes()).toContain(expected);
    });

    it('always includes text-content-text', () => {
      headingSizes.forEach((size) => {
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
