import { Entity } from 'aframe-react';
import React from 'react';

import { SphereMenu } from 'containers';

const SecondaryNavigation = (props) => {
  return (
    <Entity {...props}>
      <SphereMenu id="behind-menu-item-1" position="-0.79 0 -1.27" radius={0.25} color="#EF2D5E" />
      <SphereMenu id="behind-menu-item-2" position="0.3 0.36 -0.73" radius={0.25} color="#EF2D5E" />
      <SphereMenu id="behind-menu-item-3" position="1.04 0.1 -1.19" radius={0.25} color="#EF2D5E" />
    </Entity>
  );
};

export default SecondaryNavigation;
