import { Entity } from 'aframe-react';
import React from 'react';

import { SphereMenu } from 'containers';

const PrimaryNavigation = (props) => {
  return (
    <Entity {...props}>
      <SphereMenu id="front-menu-item-1" position="-1.46 0 1.65" radius={0.3} color="#EF2D5E" />
      <SphereMenu id="front-menu-item-2" position="0 0 1.16" radius={0.3} color="#EF2D5E" />
      <SphereMenu id="front-menu-item-3" position="1.18 0 2.15" radius={0.3} color="#EF2D5E" />
    </Entity>
  );
};

export default PrimaryNavigation;
