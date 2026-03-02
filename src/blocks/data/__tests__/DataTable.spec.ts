import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DataTable from '../DataTable.vue';

const columns = [
  { field: 'name',  header: 'Name',  sortable: true },
  { field: 'role',  header: 'Role' },
  { field: 'score', header: 'Score', sortable: true },
];

const data = [
  { name: 'Alice', role: 'Admin',  score: 90 },
  { name: 'Bob',   role: 'Editor', score: 70 },
  { name: 'Carol', role: 'Viewer', score: 80 },
];

describe('DataTable', () => {

  describe('rendering', () => {
    it('renders a table element', () => {
      const wrapper = mount(DataTable, { props: { data, columns } });
      expect(wrapper.find('table').exists()).toBe(true);
    });

    it('renders a header cell for each column', () => {
      const wrapper = mount(DataTable, { props: { data, columns } });
      expect(wrapper.findAll('th')).toHaveLength(columns.length);
    });

    it('renders a row for each data item', () => {
      const wrapper = mount(DataTable, { props: { data, columns } });
      expect(wrapper.findAll('tbody tr')).toHaveLength(data.length);
    });

    it('renders cell values', () => {
      const wrapper = mount(DataTable, { props: { data, columns } });
      expect(wrapper.text()).toContain('Alice');
      expect(wrapper.text()).toContain('Bob');
    });
  });

  describe('empty state', () => {
    it('renders default empty message when data is empty', () => {
      const wrapper = mount(DataTable, { props: { data: [], columns } });
      expect(wrapper.text()).toContain('No data available');
    });

    it('renders custom emptyMessage', () => {
      const wrapper = mount(DataTable, {
        props: { data: [], columns, emptyMessage: 'Nothing here' },
      });
      expect(wrapper.text()).toContain('Nothing here');
    });

    it('renders empty slot when provided', () => {
      const wrapper = mount(DataTable, {
        props: { data: [], columns },
        slots: { empty: '<span data-testid="empty">Custom empty</span>' },
      });
      expect(wrapper.find('[data-testid="empty"]').exists()).toBe(true);
    });
  });

  describe('loading state', () => {
    it('renders TableSkeleton when loading=true', () => {
      const wrapper = mount(DataTable, { props: { data, columns, loading: true } });
      expect(wrapper.findComponent({ name: 'TableSkeleton' }).exists()).toBe(true);
    });

    it('does not render data rows when loading=true', () => {
      const wrapper = mount(DataTable, { props: { data, columns, loading: true } });
      expect(wrapper.text()).not.toContain('Alice');
    });
  });

  describe('sorting', () => {
    it('sorts data ascending on sortable column click', async () => {
      const wrapper = mount(DataTable, { props: { data, columns } });
      // Click the Name header (index 0, sortable)
      await wrapper.findAll('th')[0]!.trigger('click');
      const cells = wrapper.findAll('td').filter((td) => ['Alice', 'Bob', 'Carol'].includes(td.text()));
      expect(cells[0]!.text()).toBe('Alice');
    });

    it('sorts data descending on second click of same column', async () => {
      const wrapper = mount(DataTable, { props: { data, columns } });
      const nameHeader = wrapper.findAll('th')[0]!;
      await nameHeader.trigger('click');
      await nameHeader.trigger('click');
      const rows = wrapper.findAll('tbody tr');
      expect(rows[0]!.text()).toContain('Carol');
    });
  });

  describe('row click', () => {
    it('emits rowClick with the row data', async () => {
      const wrapper = mount(DataTable, { props: { data, columns } });
      await wrapper.findAll('tbody tr')[0]!.trigger('click');
      expect(wrapper.emitted('rowClick')?.[0]).toEqual([data[0]]);
    });
  });

  describe('pagination', () => {
    const bigData = Array.from({ length: 25 }, (_, i) => ({
      name: `User ${i}`, role: 'member', score: i,
    }));

    it('shows only `rows` items per page when paginated=true', () => {
      const wrapper = mount(DataTable, {
        props: { data: bigData, columns, paginated: true, rows: 10 },
      });
      expect(wrapper.findAll('tbody tr')).toHaveLength(10);
    });

    it('renders Paginator when paginated=true', () => {
      const wrapper = mount(DataTable, {
        props: { data: bigData, columns, paginated: true, rows: 10 },
      });
      expect(wrapper.findComponent({ name: 'Paginator' }).exists()).toBe(true);
    });

    it('does not render Paginator when paginated=false', () => {
      const wrapper = mount(DataTable, { props: { data, columns } });
      expect(wrapper.findComponent({ name: 'Paginator' }).exists()).toBe(false);
    });
  });

});
