import { Entity } from 'aframe-react';
import React, { PropTypes } from 'react';

const SphereMenu = (props) => {
  return (
    <Entity
      geometry={{ primitive: 'sphere', radius: props.radius }}
      material={{ shader: 'flat', color: props.color }}
      scale="1 1 1"
      position={props.position}
      {...props}
    />
  );
};

SphereMenu.propTypes = {
  color: PropTypes.string,
  position: PropTypes.string,
  radius: PropTypes.number,
};

export default SphereMenu;
