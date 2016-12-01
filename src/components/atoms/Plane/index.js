import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

const Plane = (props) => {
  return (
    <Entity
      geometry={{ primitive: 'circle', radius: 12 }}
      material={{ src: `url(https://cdn.aframe.io/a-painter/images/floor.jpg)`, shader: 'flat', roughness: 0 }}
      rotation={[-90, 0, 0]}
      {...props}
    />
  );
};

/* Plane.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}; */

export default Plane;
