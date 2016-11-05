import { Entity } from 'aframe-react';
import React from 'react';
import { Cursor } from 'components';

const Camera = (props) => {
  return (
    <Entity camera="" {...props}>
      <Cursor />
    </Entity>
  );
};

export default Camera;
