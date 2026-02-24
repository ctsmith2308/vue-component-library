import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Popover from '../Popover.vue';

// Popover uses Teleport — attach to document.body
const mountPopover = (props = {}) =>
  mount(Popover, {
    props,
    attachTo: document.body,
  });

describe('Popover', () => {

  describe('initial state', () => {
    it('is not visible on mount', () => {
      const wrapper = mountPopover();
      expect(wrapper.find('[role="dialog"]').exists()).toBe(false);
      wrapper.unmount();
    });
  });

  describe('show / hide API', () => {
    it('becomes visible after show() is called', async () => {
      const wrapper = mountPopover();
      const fakeEvent = { currentTarget: document.body, target: document.body } as MouseEvent;
      await wrapper.vm.show(fakeEvent);
      await new Promise((r) => setTimeout(r, 50)); // wait for rAF
      expect(document.querySelector('[role="dialog"]')).not.toBeNull();
      wrapper.unmount();
    });

    it('hides after hide() is called', async () => {
      const wrapper = mountPopover();
      const fakeEvent = { currentTarget: document.body, target: document.body } as MouseEvent;
      await wrapper.vm.show(fakeEvent);
      await new Promise((r) => setTimeout(r, 50));
      wrapper.vm.hide();
      await new Promise((r) => setTimeout(r, 20));
      expect(document.querySelector('[role="dialog"]')).toBeNull();
      wrapper.unmount();
    });

    it('emits show and hide events', async () => {
      const wrapper = mountPopover();
      const fakeEvent = { currentTarget: document.body, target: document.body } as MouseEvent;
      wrapper.vm.show(fakeEvent);
      expect(wrapper.emitted('show')).toHaveLength(1);
      wrapper.vm.hide();
      expect(wrapper.emitted('hide')).toHaveLength(1);
      wrapper.unmount();
    });
  });

  describe('toggle API', () => {
    it('shows on first toggle', () => {
      const wrapper = mountPopover();
      const fakeEvent = { currentTarget: document.body, target: document.body } as MouseEvent;
      wrapper.vm.toggle(fakeEvent);
      expect(wrapper.emitted('show')).toHaveLength(1);
      wrapper.unmount();
    });

    it('hides on second toggle', () => {
      const wrapper = mountPopover();
      const fakeEvent = { currentTarget: document.body, target: document.body } as MouseEvent;
      wrapper.vm.toggle(fakeEvent);
      wrapper.vm.toggle(fakeEvent);
      expect(wrapper.emitted('hide')).toHaveLength(1);
      wrapper.unmount();
    });
  });

  describe('close icon', () => {
    it('does not render close button when showCloseIcon=false (default)', async () => {
      const wrapper = mountPopover();
      const fakeEvent = { currentTarget: document.body, target: document.body } as MouseEvent;
      await wrapper.vm.show(fakeEvent);
      await new Promise((r) => setTimeout(r, 50));
      expect(document.querySelector('button[aria-label="Close"]')).toBeNull();
      wrapper.unmount();
    });

    it('renders close button when showCloseIcon=true', async () => {
      const wrapper = mountPopover({ showCloseIcon: true });
      const fakeEvent = { currentTarget: document.body, target: document.body } as MouseEvent;
      await wrapper.vm.show(fakeEvent);
      await new Promise((r) => setTimeout(r, 50));
      expect(document.querySelector('button[aria-label="Close"]')).not.toBeNull();
      wrapper.unmount();
    });
  });

  describe('slot', () => {
    it('renders slot content inside dialog', async () => {
      const wrapper = mount(Popover, {
        slots: { default: '<p data-testid="content">Hello</p>' },
        attachTo: document.body,
      });
      const fakeEvent = { currentTarget: document.body, target: document.body } as MouseEvent;
      await wrapper.vm.show(fakeEvent);
      await new Promise((r) => setTimeout(r, 50));
      expect(document.querySelector('[data-testid="content"]')).not.toBeNull();
      wrapper.unmount();
    });
  });

});
