import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Panel from '../Panel.vue';

describe('Panel', () => {

  it('renders a div', () => {
    const wrapper = mount(Panel);
    expect(wrapper.element.tagName).toBe('DIV');
  });

  it('applies surface background token', () => {
    const wrapper = mount(Panel);
    expect(wrapper.classes()).toContain('bg-surface');
  });

  it('applies surface border token', () => {
    const wrapper = mount(Panel);
    expect(wrapper.classes()).toContain('border-surface-border');
  });

  it('applies rounded-md', () => {
    const wrapper = mount(Panel);
    expect(wrapper.classes()).toContain('rounded-md');
  });

  it('renders slot content', () => {
    const wrapper = mount(Panel, { slots: { default: '<span>Content</span>' } });
    expect(wrapper.text()).toBe('Content');
  });

});
