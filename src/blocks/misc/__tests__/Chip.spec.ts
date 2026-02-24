import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Chip from '../Chip.vue';

describe('Chip', () => {

  describe('rendering', () => {
    it('renders the label', () => {
      const wrapper = mount(Chip, { props: { label: 'Vue' } });
      expect(wrapper.text()).toContain('Vue');
    });

    it('renders an <img> when image prop is provided', () => {
      const wrapper = mount(Chip, { props: { label: 'Vue', image: '/logo.png' } });
      const img = wrapper.find('img');
      expect(img.exists()).toBe(true);
      expect(img.attributes('src')).toBe('/logo.png');
    });

    it('renders icon slot when icon=true', () => {
      const wrapper = mount(Chip, {
        props: { label: 'X', icon: true },
        slots: { icon: '<svg data-testid="icon" />' },
      });
      expect(wrapper.find('[data-testid="icon"]').exists()).toBe(true);
    });

    it('does not render remove button when removable=false', () => {
      const wrapper = mount(Chip, { props: { label: 'X' } });
      expect(wrapper.find('button').exists()).toBe(false);
    });

    it('renders remove button when removable=true', () => {
      const wrapper = mount(Chip, { props: { label: 'X', removable: true } });
      expect(wrapper.find('button').exists()).toBe(true);
    });
  });

  describe('color classes', () => {
    it.each([
      ['primary',   'bg-brand-lighter',     'text-brand',     'border-brand'],
      ['secondary', 'bg-secondary-lighter', 'text-secondary', 'border-secondary'],
      ['success',   'bg-success-lighter',   'text-success',   'border-success'],
      ['danger',    'bg-danger-lighter',    'text-danger',    'border-danger'],
    ] as const)('%s color applies correct classes', (color, bg, text, border) => {
      const wrapper = mount(Chip, { props: { label: 'X', color } });
      expect(wrapper.classes()).toContain(bg);
      expect(wrapper.classes()).toContain(text);
      expect(wrapper.classes()).toContain(border);
    });
  });

  describe('remove interaction', () => {
    it('emits remove event when remove button is clicked', async () => {
      const wrapper = mount(Chip, { props: { label: 'X', removable: true } });
      await wrapper.find('button').trigger('click');
      expect(wrapper.emitted('remove')).toHaveLength(1);
    });
  });

});
