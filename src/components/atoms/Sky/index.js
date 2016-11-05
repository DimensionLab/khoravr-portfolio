import { Entity } from 'aframe-react';
import React, { PropTypes } from 'react';

const Sky = (props) => {
  return (
    <Entity
      geometry={{ primitive: 'sphere', radius: 100 }}
      material={{ shader: 'flat', src: props.src }}
      scale="1 1 -1"
    />
  );
};

Sky.propTypes = {
  src: PropTypes.string,
};

export default Sky;
