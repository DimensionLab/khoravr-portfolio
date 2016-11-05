import { Entity } from 'aframe-react';
import React from 'react';

import { SphereMenu } from 'components';

const PrimaryNavigation = (props) => {
  return (
    <Entity {...props}>
      <SphereMenu id="front-menu-item-1" position="-3.81 0 0" radius={1} color="#EF2D5E" />
      <SphereMenu id="front-menu-item-2" position="0 0 0" radius={1} color="#EF2D5E" />
      <SphereMenu id="front-menu-item-3" position="3.57 0 0" radius={1} color="#EF2D5E" />
    </Entity>
  );
};

export default PrimaryNavigation;
