import { Entity } from 'aframe-react';
import React, { PropTypes } from 'react';

const SphereMenu = ({id, color, image, position, radius, menuExpanded, expandMenu, ...props}) => {
  return (
    <Entity
      //animation__bounce={{ property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1', startEvents: 'click' }}
      geometry={{ primitive: 'sphere', radius: radius }}
      material={{ shader: 'flat', color: color }}
      scale={menuExpanded ? "1.5 1.5 1.5" : "1 1 1"}
      position={position}
      onClick={()=>expandMenu(menuExpanded)}
      // onClick={()=>expandMenu(menuExpanded)}
      {...props}
    />
  );
};

SphereMenu.propTypes = {
  color: PropTypes.string,
  position: PropTypes.string,
  radius: PropTypes.number,
  expandMenu: PropTypes.func,
};

export default SphereMenu;
