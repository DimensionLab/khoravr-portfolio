import { Entity } from 'aframe-react';
import React from 'react';

import { SphereMenu } from 'components';

const SecondaryNavigation = (props) => {
  return (
    <Entity {...props}>
      <SphereMenu id="behind-menu-item-1" position="-2.7 0 0" radius={1.25} color="#EF2D5E" />
      <SphereMenu id="behind-menu-item-2" position="0.3 1 0" radius={1.25} color="#EF2D5E" />
      <SphereMenu id="behind-menu-item-3" position="2.8 0.1 -0.3" radius={1.25} color="#EF2D5E" />
    </Entity>
  );
};

export default SecondaryNavigation;
