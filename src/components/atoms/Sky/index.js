import { Entity } from 'aframe-react';
import React, { PropTypes } from 'react';

const Sky = ({ src }) => {
  return (
    <Entity
      geometry={{ primitive: 'sphere', radius: 100 }}
      material={{ shader: 'flat', src: `url(${src})` }}
      scale="1 1 -1"
    />
  );
};

Sky.propTypes = {
  src: PropTypes.string,
};

export default Sky;
