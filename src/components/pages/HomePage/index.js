import React from 'react';
import { Lights, PrimaryNavigation, SecondaryNavigation, Sky, VRScene } from 'components';

import skyImage from './01_360_balet.jpg';

const HomePage = () => {
  return (
    <VRScene>
      <Lights position="0 1.25 0" />
      <PrimaryNavigation position="0 1.25 -3.95" />
      <SecondaryNavigation position="-0.10 1.25 2.38" />
      {/* <Grid /> */}
      <Sky src={skyImage} />
    </VRScene>
  );
};

export default HomePage;
