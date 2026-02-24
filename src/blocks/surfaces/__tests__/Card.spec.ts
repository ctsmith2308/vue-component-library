import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Card from '../Card.vue';

describe('Card', () => {

  it('renders a div with the card class', () => {
    const wrapper = mount(Card);
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain('card');
  });

  it('renders slot content', () => {
    const wrapper = mount(Card, { slots: { default: '<p>Card content</p>' } });
    expect(wrapper.find('p').exists()).toBe(true);
    expect(wrapper.text()).toBe('Card content');
  });

});
