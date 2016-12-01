import { Entity } from 'aframe-react';
import React, { PropTypes } from 'react';
import cgsky from './cgsky.jpg';

const Sky = (props) => {
  return (
    <Entity
      geometry={{ primitive: 'sphere', radius: 100 }}
      material={{ shader: 'flat', src: `url(${cgsky})` }}
      rotation={[0, 90, 0]}
      scale="1 1 -1"
      {...props}
    />
  );
};

Sky.propTypes = {
  src: PropTypes.string,
};

export default Sky;
