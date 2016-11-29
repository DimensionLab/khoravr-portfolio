import React from 'react';
import { Lights, PrimaryNavigation, SecondaryNavigation, Sky, VRScene, Ocean, Plane } from 'components';

const HomePage = () => {
  return (
    <VRScene fog="type: exponential; color: #AAB; far: 200; near: 0; density: 0.01;">
      <Lights position="0 1.25 0" />
      <PrimaryNavigation position="0 1.25 -3.95" />
      <SecondaryNavigation position="-0.10 1.25 2.38" />
      <Ocean />
      {/* <Grid /> */}
      <Sky />

      <Plane width={1000} height={500} position={[0, 0.03, 235]} />
    </VRScene>
  );
};

export default HomePage;
