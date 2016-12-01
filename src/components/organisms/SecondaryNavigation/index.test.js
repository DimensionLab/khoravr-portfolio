import 'aframe';
import React from 'react';
import { shallow } from 'enzyme';
import { Entity } from 'aframe-react';
import SecondaryNavigation from '.';

const wrap = (props = {}) => shallow(<SecondaryNavigation {...props} />);

describe('<SecondaryNavigation />', () => {
  it('renders props when passed in', () => {
    const wrapper = wrap({ id: 'foo' });
    expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0);
  });

  it('renders position prop when passed in', () => {
    const wrapper = wrap({ position: '1 1 1' });
    expect(wrapper.find({ position: '1 1 1' }).length).toBeGreaterThan(0);
  });

  it('renders one <Entity /> component inside it', () => {
    const wrapper = wrap();
    expect(wrapper.find(Entity).length).toBe(1);
  });

  it('renders three <SphereMenu /> components inside it', () => {
    const wrapper = wrap();
    expect(wrapper.children().length).toBe(3);
  });
});
