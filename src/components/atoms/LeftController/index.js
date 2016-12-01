import React from 'react';
import { Entity } from 'aframe-react';

const LeftController = (props) => {
  return (
    <Entity
      vive-controls="hand: left"
      sphere-collision="objects: .grabbable"
      grabber
      {...props}
    />
  );
};

export default LeftController;
