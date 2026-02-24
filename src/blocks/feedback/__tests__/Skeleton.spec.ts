import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Skeleton from '../Skeleton.vue';

describe('Skeleton', () => {

  describe('animation classes', () => {
    it('applies animate-pulse by default', () => {
      const wrapper = mount(Skeleton);
      expect(wrapper.classes()).toContain('animate-pulse');
    });

    it('applies animate-wave when animation="wave"', () => {
      const wrapper = mount(Skeleton, { props: { animation: 'wave' } });
      expect(wrapper.classes()).toContain('animate-wave');
    });

    it('applies no animation class when animation="none"', () => {
      const wrapper = mount(Skeleton, { props: { animation: 'none' } });
      expect(wrapper.classes()).not.toContain('animate-pulse');
      expect(wrapper.classes()).not.toContain('animate-wave');
    });
  });

  describe('rectangle shape (default)', () => {
    it('applies width and height from props', () => {
      const wrapper = mount(Skeleton, { props: { width: '200px', height: '20px' } });
      expect(wrapper.attributes('style')).toContain('width: 200px');
      expect(wrapper.attributes('style')).toContain('height: 20px');
    });

    it('defaults to width 100% and height 1rem', () => {
      const wrapper = mount(Skeleton);
      expect(wrapper.attributes('style')).toContain('width: 100%');
      expect(wrapper.attributes('style')).toContain('height: 1rem');
    });
  });

  describe('circle shape', () => {
    it('applies border-radius 50%', () => {
      const wrapper = mount(Skeleton, { props: { shape: 'circle', size: '48px' } });
      expect(wrapper.attributes('style')).toContain('border-radius: 50%');
    });

    it('uses size for both width and height', () => {
      const wrapper = mount(Skeleton, { props: { shape: 'circle', size: '48px' } });
      expect(wrapper.attributes('style')).toContain('width: 48px');
      expect(wrapper.attributes('style')).toContain('height: 48px');
    });

    it('falls back to height when size is not provided', () => {
      const wrapper = mount(Skeleton, { props: { shape: 'circle', height: '32px' } });
      expect(wrapper.attributes('style')).toContain('width: 32px');
    });
  });

  describe('square shape', () => {
    it('uses size for both width and height', () => {
      const wrapper = mount(Skeleton, { props: { shape: 'square', size: '64px' } });
      expect(wrapper.attributes('style')).toContain('width: 64px');
      expect(wrapper.attributes('style')).toContain('height: 64px');
    });
  });

  describe('slot', () => {
    it('renders slot content', () => {
      const wrapper = mount(Skeleton, { slots: { default: '<span>inner</span>' } });
      expect(wrapper.find('span').exists()).toBe(true);
    });
  });

});
