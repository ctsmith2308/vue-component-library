import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TableHeaderCell from '../TableHeaderCell.vue';

const sortableColumn   = { field: 'name',  header: 'Name',  sortable: true };
const unsortableColumn = { field: 'email', header: 'Email', sortable: false };

describe('TableHeaderCell', () => {

  describe('rendering', () => {
    it('renders a <th> element', () => {
      const wrapper = mount(TableHeaderCell, {
        props: { column: sortableColumn, sortField: null, sortOrder: 'asc' },
      });
      expect(wrapper.element.tagName).toBe('TH');
    });

    it('renders column header text', () => {
      const wrapper = mount(TableHeaderCell, {
        props: { column: sortableColumn, sortField: null, sortOrder: 'asc' },
      });
      expect(wrapper.text()).toContain('Name');
    });

    it('applies width style when column.width is set', () => {
      const col = { ...sortableColumn, width: '200px' };
      const wrapper = mount(TableHeaderCell, {
        props: { column: col, sortField: null, sortOrder: 'asc' },
      });
      expect(wrapper.attributes('style')).toContain('width: 200px');
    });
  });

  describe('sortable classes', () => {
    it('applies table-header-cell--sortable for sortable columns', () => {
      const wrapper = mount(TableHeaderCell, {
        props: { column: sortableColumn, sortField: null, sortOrder: 'asc' },
      });
      expect(wrapper.classes()).toContain('table-header-cell--sortable');
    });

    it('does not apply table-header-cell--sortable for unsortable columns', () => {
      const wrapper = mount(TableHeaderCell, {
        props: { column: unsortableColumn, sortField: null, sortOrder: 'asc' },
      });
      expect(wrapper.classes()).not.toContain('table-header-cell--sortable');
    });
  });

  describe('sort icon visibility', () => {
    it('renders sort icon for sortable column', () => {
      const wrapper = mount(TableHeaderCell, {
        props: { column: sortableColumn, sortField: null, sortOrder: 'asc' },
      });
      expect(wrapper.find('.sort-icon').exists()).toBe(true);
    });

    it('does not render sort icon for unsortable column', () => {
      const wrapper = mount(TableHeaderCell, {
        props: { column: unsortableColumn, sortField: null, sortOrder: 'asc' },
      });
      expect(wrapper.find('.sort-icon').exists()).toBe(false);
    });
  });

  describe('sort emit', () => {
    it('emits sort event with field when sortable header is clicked', async () => {
      const wrapper = mount(TableHeaderCell, {
        props: { column: sortableColumn, sortField: null, sortOrder: 'asc' },
      });
      await wrapper.trigger('click');
      expect(wrapper.emitted('sort')?.[0]).toEqual(['name']);
    });

    it('does not emit sort event when unsortable header is clicked', async () => {
      const wrapper = mount(TableHeaderCell, {
        props: { column: unsortableColumn, sortField: null, sortOrder: 'asc' },
      });
      await wrapper.trigger('click');
      expect(wrapper.emitted('sort')).toBeUndefined();
    });
  });

});
