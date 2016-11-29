import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';
import grain from './grain.png';

const Plane = (props) => {
  return (
    <Entity
      geometry={{ primitive: 'plane', width: props.width, height: props.height }}
      material={{ src: `url(${grain})`, shader: 'flat', roughness: 0, repeat: '500 250' }}
      rotation={[-90, 0, 0]}
      {...props}
    />
  );
};

Plane.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Plane;
