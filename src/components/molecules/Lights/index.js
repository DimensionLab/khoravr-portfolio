import { Entity } from 'aframe-react';
import React from 'react';

const Lights = (props) => {
  return (
    <Entity {...props}>
      <Entity light={{ type: 'directional', color: '#b8dba9', decay: 1.66, distance: 0.66, intensity: 1.54 }} position={[0, 0, 2]} />
      <Entity light={{ angle: 90, color: '#ff9927', groundColor: '#fcfffe', decay: 2, intensity: 2.76 }} position={[0, 2.37, -152.93]} />
    </Entity>
  );
};

export default Lights;
