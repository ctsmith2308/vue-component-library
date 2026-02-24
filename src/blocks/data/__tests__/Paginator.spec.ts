import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Paginator from '../Paginator.vue';

describe('Paginator', () => {

  describe('rendering', () => {
    it('renders a nav element', () => {
      const wrapper = mount(Paginator, { props: { totalRecords: 50, rows: 10 } });
      expect(wrapper.find('nav').exists()).toBe(true);
    });

    it('shows correct record range info', () => {
      const wrapper = mount(Paginator, { props: { totalRecords: 50, rows: 10, first: 0 } });
      expect(wrapper.text()).toContain('Showing 1 to 10 of 50');
    });

    it('shows correct range on second page', () => {
      const wrapper = mount(Paginator, { props: { totalRecords: 50, rows: 10, first: 10 } });
      expect(wrapper.text()).toContain('Showing 11 to 20 of 50');
    });

    it('caps range display at totalRecords on last page', () => {
      const wrapper = mount(Paginator, { props: { totalRecords: 23, rows: 10, first: 20 } });
      expect(wrapper.text()).toContain('Showing 21 to 23 of 23');
    });
  });

  describe('page buttons', () => {
    it('renders visible page number buttons', () => {
      const wrapper = mount(Paginator, {
        props: { totalRecords: 50, rows: 10, first: 0, pageLinkSize: 5 },
      });
      // 5 page link buttons + 4 nav buttons (first/prev/next/last)
      const pageBtns = wrapper.findAll('button.btn').filter((b) => /^\d+$/.test(b.text()));
      expect(pageBtns).toHaveLength(5);
    });
  });

  describe('navigation', () => {
    it('emits page event with correct data on next page', async () => {
      const wrapper = mount(Paginator, { props: { totalRecords: 50, rows: 10, first: 0 } });
      await wrapper.find('button[aria-label="Next page"]').trigger('click');
      expect(wrapper.emitted('page')?.[0]).toEqual([
        { page: 1, first: 10, rows: 10, pageCount: 5 },
      ]);
    });

    it('emits page event on last page button', async () => {
      const wrapper = mount(Paginator, { props: { totalRecords: 50, rows: 10, first: 0 } });
      await wrapper.find('button[aria-label="Last page"]').trigger('click');
      expect(wrapper.emitted('page')?.[0]).toEqual([
        { page: 4, first: 40, rows: 10, pageCount: 5 },
      ]);
    });

    it('first and prev buttons are disabled on first page', () => {
      const wrapper = mount(Paginator, { props: { totalRecords: 50, rows: 10, first: 0 } });
      expect(wrapper.find('button[aria-label="First page"]').attributes('disabled')).toBeDefined();
      expect(wrapper.find('button[aria-label="Previous page"]').attributes('disabled')).toBeDefined();
    });

    it('next and last buttons are disabled on last page', () => {
      const wrapper = mount(Paginator, { props: { totalRecords: 50, rows: 10, first: 40 } });
      expect(wrapper.find('button[aria-label="Next page"]').attributes('disabled')).toBeDefined();
      expect(wrapper.find('button[aria-label="Last page"]').attributes('disabled')).toBeDefined();
    });
  });

});
