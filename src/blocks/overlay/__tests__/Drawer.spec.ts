import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Drawer from '../Drawer.vue';

describe('Drawer', () => {

  describe('visibility', () => {
    it('does not render drawer panel when isOpen=false', () => {
      const wrapper = mount(Drawer, { props: { isOpen: false } });
      // The drawer div itself should not be in the DOM
      expect(wrapper.find('.fixed.z-30').exists()).toBe(false);
    });

    it('renders drawer panel when isOpen=true', () => {
      const wrapper = mount(Drawer, { props: { isOpen: true } });
      expect(wrapper.find('.fixed.z-30').exists()).toBe(true);
    });
  });

  describe('position classes', () => {
    it.each([
      ['left',   'left-0', 'h-full', 'w-80'],
      ['right',  'right-0', 'h-full', 'w-80'],
      ['top',    'top-0',  'w-full', 'h-64'],
      ['bottom', 'bottom-0', 'w-full', 'h-64'],
    ] as const)('position="%s" applies correct classes', (position, posClass, dimClass1, dimClass2) => {
      const wrapper = mount(Drawer, { props: { isOpen: true, position } });
      const panel = wrapper.find('.fixed.z-30');
      expect(panel.classes()).toContain(posClass);
      expect(panel.classes()).toContain(dimClass1);
      expect(panel.classes()).toContain(dimClass2);
    });
  });

  describe('size classes — horizontal', () => {
    it.each([
      ['sm', 'w-64'],
      ['md', 'w-80'],
      ['lg', 'w-96'],
      ['full', 'w-full'],
    ] as const)('size="%s" applies %s for left drawer', (size, expected) => {
      const wrapper = mount(Drawer, { props: { isOpen: true, position: 'left', size } });
      expect(wrapper.find('.fixed.z-30').classes()).toContain(expected);
    });
  });

  describe('slots', () => {
    it('renders header slot content', () => {
      const wrapper = mount(Drawer, {
        props: { isOpen: true },
        slots: { header: '<h2>Drawer Title</h2>' },
      });
      expect(wrapper.find('h2').exists()).toBe(true);
      expect(wrapper.find('h2').text()).toBe('Drawer Title');
    });

    it('renders default slot content', () => {
      const wrapper = mount(Drawer, {
        props: { isOpen: true },
        slots: { default: '<p>Body content</p>' },
      });
      expect(wrapper.find('p').text()).toBe('Body content');
    });

    it('renders footer slot when provided', () => {
      const wrapper = mount(Drawer, {
        props: { isOpen: true },
        slots: { footer: '<button>Save</button>' },
      });
      expect(wrapper.find('button[aria-label="Close drawer"]').exists()).toBe(true);
      expect(wrapper.text()).toContain('Save');
    });

    it('does not render footer section when footer slot is empty', () => {
      const wrapper = mount(Drawer, { props: { isOpen: true } });
      // Footer container only mounts when $slots.footer exists
      const footers = wrapper.findAll('.shrink-0.p-4.border-t');
      expect(footers).toHaveLength(0);
    });
  });

  describe('close button', () => {
    it('emits close when close button is clicked', async () => {
      const wrapper = mount(Drawer, { props: { isOpen: true } });
      await wrapper.find('button[aria-label="Close drawer"]').trigger('click');
      expect(wrapper.emitted('close')).toHaveLength(1);
    });
  });

});
