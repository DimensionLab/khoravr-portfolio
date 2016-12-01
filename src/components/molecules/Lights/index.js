import { Entity } from 'aframe-react';
import React from 'react';

const Lights = (props) => {
  return (
    <Entity {...props}>
      <Entity light={{ type: 'point', color: '#fff', intensity: 0.6 }} position="3 10 1" />
      <Entity light={{ type: 'point', color: '#fff', intensity: 0.2 }} position="-3 -10 1" />
      <Entity light={{ type: 'hemisphere,', groundColor: '#888', intensity: 0.8 }} />
    </Entity>
  );
};

export default Lights;
