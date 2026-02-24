import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Avatar from '../Avatar.vue';

describe('Avatar', () => {

  describe('rendering modes', () => {
    it('renders an <img> when image prop is provided', () => {
      const wrapper = mount(Avatar, { props: { image: '/avatar.png', label: 'John Doe' } });
      expect(wrapper.find('img').exists()).toBe(true);
      expect(wrapper.find('img').attributes('src')).toBe('/avatar.png');
    });

    it('renders icon slot when icon=true and no image', () => {
      const wrapper = mount(Avatar, {
        props: { icon: true },
        slots: { icon: '<svg data-testid="icon" />' },
      });
      expect(wrapper.find('[data-testid="icon"]').exists()).toBe(true);
    });

    it('renders initials when only label is provided', () => {
      const wrapper = mount(Avatar, { props: { label: 'John Doe' } });
      expect(wrapper.text()).toBe('JD');
    });

    it('renders first two characters for single-word label', () => {
      const wrapper = mount(Avatar, { props: { label: 'John' } });
      expect(wrapper.text()).toBe('JO');
    });

    it('renders empty string when no label', () => {
      const wrapper = mount(Avatar);
      expect(wrapper.text()).toBe('');
    });
  });

  describe('size classes', () => {
    it.each([
      ['sm', 'w-8',  'h-8'],
      ['md', 'w-10', 'h-10'],
      ['lg', 'w-12', 'h-12'],
      ['xl', 'w-16', 'h-16'],
    ] as const)('%s size applies correct dimensions', (size, w, h) => {
      const wrapper = mount(Avatar, { props: { size } });
      expect(wrapper.classes()).toContain(w);
      expect(wrapper.classes()).toContain(h);
    });
  });

  describe('shape classes', () => {
    it('applies rounded-full for circle shape (default)', () => {
      const wrapper = mount(Avatar);
      expect(wrapper.classes()).toContain('rounded-full');
    });

    it('applies rounded-lg for square shape', () => {
      const wrapper = mount(Avatar, { props: { shape: 'square' } });
      expect(wrapper.classes()).toContain('rounded-lg');
    });
  });

  describe('background', () => {
    it('applies bg-brand when no image is set', () => {
      const wrapper = mount(Avatar, { props: { label: 'AB' } });
      expect(wrapper.classes()).toContain('bg-brand');
    });

    it('does not apply bg-brand when image is set', () => {
      const wrapper = mount(Avatar, { props: { image: '/img.png' } });
      expect(wrapper.classes()).not.toContain('bg-brand');
    });
  });

});
