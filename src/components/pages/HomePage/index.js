import React from 'react';

import { Grid, Lights, PrimaryNavigation, SecondaryNavigation, VRScene } from 'components';

const HomePage = () => {
  return (
    <VRScene>
      <Lights position="0 1.25 0" />
      <PrimaryNavigation position="0 1.25 -4" />
      <SecondaryNavigation position="0 1.25 7" />
      <Grid />
    </VRScene>
  );
};

export default HomePage;
