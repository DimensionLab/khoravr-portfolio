import { Entity } from 'aframe-react';
import React from 'react';

const Lights = (props) => {
  return (
    <Entity {...props}>
      <Entity light={{ type: 'ambient', color: '#888' }} />
      <Entity light={{ type: 'directional', intensity: 0.5 }} position={[-1, 1, 0]} />
      <Entity light={{ type: 'directional', intensity: 1 }} position={[1, 1, 0]} />
    </Entity>
  );
};

export default Lights;
