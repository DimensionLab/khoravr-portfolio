import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import { Scene } from 'aframe-react';
import React, { Component, PropTypes } from 'react';
import extras from 'aframe-extras';
import { Camera } from 'components';

class VRScene extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  }

  componentWillMount() {
    // Initialize aframe-extras
    // extras.registerAll();
  }

  render() {
    return (
      <Scene {...this.props}>
        {this.props.children}
      </Scene>
    );
  }
};

export default VRScene;
