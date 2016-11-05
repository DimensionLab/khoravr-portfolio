import React from 'react';
import { shallow } from 'enzyme';
import PrimaryNavigation from '.';

const wrap = (props = {}) => shallow(<PrimaryNavigation {...props} />);

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' });
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0);
});

it('renders position prop when passed in', () => {
  const wrapper = wrap({ position: '1 1 1' });
  expect(wrapper.find({ position: '1 1 1' }).length).toBeGreaterThan(0);
});
