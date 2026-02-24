import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import PageOverlay from '../PageOverlay.vue';

describe('PageOverlay', () => {

  describe('visibility', () => {
    it('does not render backdrop when isOpen=false', () => {
      const wrapper = mount(PageOverlay, { props: { isOpen: false } });
      expect(wrapper.find('div').exists()).toBe(false);
    });

    it('renders backdrop div when isOpen=true', () => {
      const wrapper = mount(PageOverlay, { props: { isOpen: true } });
      expect(wrapper.find('div').exists()).toBe(true);
    });
  });

  describe('interaction', () => {
    it('emits close when backdrop is clicked', async () => {
      const wrapper = mount(PageOverlay, { props: { isOpen: true } });
      await wrapper.find('div').trigger('click');
      expect(wrapper.emitted('close')).toHaveLength(1);
    });
  });

});
