import { Entity } from 'aframe-react';
import React, { PropTypes } from 'react';

const SphereMenu = ({
  id,
  color,
  position,
  radius,
  menuExpanded,
  expandMenu,
  ...props
}) => {
  return (
    <Entity
      // animation__bounce={{ property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1', startEvents: 'click' }}
      geometry={{ primitive: 'sphere', radius }}
      material={{ shader: 'standard', color }}
      scale={menuExpanded ? '1.5 1.5 1.5' : '1 1 1'}
      position={position}
      onClick={() => expandMenu(id)}
      // onClick={()=>expandMenu(menuExpanded)}
      {...props}
    />
  );
};

SphereMenu.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  position: PropTypes.string,
  radius: PropTypes.number,
  menuExpanded: PropTypes.bool,
  expandMenu: PropTypes.func,
};

export default SphereMenu;
