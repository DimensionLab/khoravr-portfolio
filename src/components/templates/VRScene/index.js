import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import { Scene } from 'aframe-react';
import React, { PropTypes } from 'react';
import extras from 'aframe-extras';
import { Camera } from 'components';

extras.registerAll();

const VRScene = ({ children, ...props }) => {
  return (
    <Scene {...props}>
      <Camera look-controls="" position="0 1.8 0" />
      {children}
    </Scene>
  );
};

VRScene.propTypes = {
  children: PropTypes.any.isRequired,
};

export default VRScene;
