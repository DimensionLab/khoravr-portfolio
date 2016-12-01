import 'aframe';
import React from 'react';
import { shallow } from 'enzyme';
// import sinon from 'sinon';
import { Entity } from 'aframe-react';
import SphereMenu from '.';

const expandMenu = jest.fn();

const wrap = (props = {}) => shallow(<SphereMenu onClick={expandMenu} {...props} />);

describe('<SphereMenu />', () => {
  it('renders position prop when passed in', () => {
    const wrapper = wrap({ position: '1 1 1' });
    expect(wrapper.find({ position: '1 1 1' }).length).toBeGreaterThan(0);
  });

  it('renders one <Entity /> component inside it', () => {
    const wrapper = wrap();
    expect(wrapper.find(Entity).length).toBe(1);
  });

  /* it('simulates click events', () => {
    const onClick = expandMenu.createSpy();
    const wrapper = wrap({ id: 'front-menu-item-1' });
    expect(onClick).toNotHaveBeenCalled();
    wrapper.simulate('click');
    console.log(wrapper);
    console.log(wrapper.node.props.scale);
    expect(onClick).toHaveBeenCalled();
    //expect(wrapper.find(Entity).length).toBe(1);
  }); */
});
