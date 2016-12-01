import { Entity } from 'aframe-react';
import React, { PropTypes } from 'react';
// import cgsky from './cgsky.jpg';

const Sky = (props) => {
  return (
    <Entity
      geometry={{ primitive: 'sphere', radius: 30, phiLength: 360, phiStart: 0, thetaLength: 90 }}
      material={{ shader: 'flat', src: `url(https://cdn.aframe.io/a-painter/images/sky.jpg)`, side: 'back', height: 2048, width: 2048 }}
      {...props}
    />
  );
};

/* Sky.propTypes = {
  src: PropTypes.string,
}; */

export default Sky;
