import React from 'react';
import { Entity } from 'aframe-react';

const RightController = (props) => {
  return (
    <Entity
      vive-controls="hand: right"
      sphere-collision="objects: .grabbable"
      grabber
      {...props}
    />
  );
};

export default RightController;
