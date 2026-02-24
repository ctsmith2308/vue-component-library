import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Text from '../Text.vue';

describe('Text', () => {

  describe('tag rendering', () => {
    it.each([
      ['p', 'P'],
      ['div', 'DIV'],
      ['span', 'SPAN'],
      ['label', 'LABEL'],
      ['section', 'SECTION'],
      ['article', 'ARTICLE'],
    ] as const)('renders <%s> element', (tag, expected) => {
      const wrapper = mount(Text, { props: { tag } });
      expect(wrapper.element.tagName).toBe(expected);
    });

    it('defaults to <p> tag', () => {
      const wrapper = mount(Text);
      expect(wrapper.element.tagName).toBe('P');
    });
  });

  describe('size classes', () => {
    it.each([
      ['sm', 'text-body-sm'],
      ['md', 'text-body-md'],
      ['lg', 'text-body-lg'],
    ] as const)('applies %s size class', (size, expected) => {
      const wrapper = mount(Text, { props: { size } });
      expect(wrapper.classes()).toContain(expected);
    });

    it('defaults to text-body-md', () => {
      const wrapper = mount(Text);
      expect(wrapper.classes()).toContain('text-body-md');
    });
  });

  describe('color classes', () => {
    it.each([
      ['default',   'text-content-text'],
      ['muted',     'text-content-text-muted'],
      ['secondary', 'text-content-text-secondary'],
      ['danger',    'text-danger'],
      ['brand',     'text-brand'],
    ] as const)('applies %s color class', (color, expected) => {
      const wrapper = mount(Text, { props: { color } });
      expect(wrapper.classes()).toContain(expected);
    });

    it('defaults to text-content-text-muted', () => {
      const wrapper = mount(Text);
      expect(wrapper.classes()).toContain('text-content-text-muted');
    });
  });

  describe('slot', () => {
    it('renders slot content', () => {
      const wrapper = mount(Text, { slots: { default: 'Hello world' } });
      expect(wrapper.text()).toBe('Hello world');
    });
  });

});
