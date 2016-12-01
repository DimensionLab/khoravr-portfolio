import React from 'react';
import { Entity } from 'aframe-react';
import { Lights, ParametricFunction, Sky, VRScene, LeftController, RightController, Plane, Grid } from 'components';

const HomePage = () => {
  return (
    <VRScene>
      <Lights />
      {/* Function box with grid */}
      <Entity
        id="function-box"
        class="grabbable"
        geometry="primitive: box; width: 1; height: 1; depth: 1;"
        material="transparent: true; opacity: 0; shader: standard"
        scale="0.2 0.2 0.2"
        position="0 1.3 -0.6">
        <Grid step={20} size={2} colorCenterLine="red" colorGrid="#c7c7c7" axes="" material={{ opacity: 0.5 }} />
        <ParametricFunction />
      </Entity>

      <Sky />

      <LeftController />
      <RightController />

      <Plane />
    </VRScene>
  );
};

export default HomePage;
