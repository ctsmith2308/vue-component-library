import { describe, it, expect, vi, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import Carousel from '../Carousel.vue';

const items = ['A', 'B', 'C', 'D'];

describe('Carousel', () => {

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('rendering', () => {
    it('renders all items', () => {
      const wrapper = mount(Carousel, { props: { value: items } });
      expect(wrapper.findAll('.flex-shrink-0')).toHaveLength(items.length);
    });

    it('renders indicators by default', () => {
      const wrapper = mount(Carousel, { props: { value: items } });
      expect(wrapper.findAll('button[aria-label^="Go to page"]')).toHaveLength(items.length);
    });

    it('hides indicators when showIndicators=false', () => {
      const wrapper = mount(Carousel, { props: { value: items, showIndicators: false } });
      expect(wrapper.findAll('button[aria-label^="Go to page"]')).toHaveLength(0);
    });
  });

  describe('navigation', () => {
    it('does not show prev button at first item', () => {
      const wrapper = mount(Carousel, { props: { value: items } });
      expect(wrapper.find('button[aria-label="Previous"]').exists()).toBe(false);
    });

    it('shows next button when not at last item', () => {
      const wrapper = mount(Carousel, { props: { value: items } });
      expect(wrapper.find('button[aria-label="Next"]').exists()).toBe(true);
    });

    it('advances index after clicking next', async () => {
      const wrapper = mount(Carousel, { props: { value: items } });
      await wrapper.find('button[aria-label="Next"]').trigger('click');
      expect(wrapper.emitted('page')?.[0]).toEqual([1]);
    });

    it('emits page event with correct index on indicator click', async () => {
      const wrapper = mount(Carousel, { props: { value: items } });
      const indicators = wrapper.findAll('button[aria-label^="Go to page"]');
      await indicators[2].trigger('click');
      expect(wrapper.emitted('page')?.[0]).toEqual([2]);
    });
  });

  describe('circular mode', () => {
    it('shows both prev and next at first item when circular=true', () => {
      const wrapper = mount(Carousel, { props: { value: items, circular: true } });
      expect(wrapper.find('button[aria-label="Previous"]').exists()).toBe(true);
      expect(wrapper.find('button[aria-label="Next"]').exists()).toBe(true);
    });
  });

  describe('autoplay', () => {
    it('advances automatically with autoplayInterval', async () => {
      vi.useFakeTimers();
      const wrapper = mount(Carousel, { props: { value: items, autoplayInterval: 1000, circular: true } });
      vi.advanceTimersByTime(1000);
      await wrapper.vm.$nextTick();
      expect(wrapper.emitted('page')).toBeTruthy();
    });
  });

  describe('numVisible', () => {
    it('sets item width based on numVisible', () => {
      const wrapper = mount(Carousel, { props: { value: items, numVisible: 2 } });
      const firstItem = wrapper.find('.flex-shrink-0');
      expect(firstItem.attributes('style')).toContain('width: 50%');
    });
  });

});
