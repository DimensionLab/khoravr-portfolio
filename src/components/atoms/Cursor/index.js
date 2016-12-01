import React from 'react';

// @TODO: make cursor great again - loading white ring around it
//const coJe = text => console.log(text);

const Cursor = (props) => {
  return (
    <a-cursor
      animation__click="property: scale; startEvents: click; from: 0.005 0.005 0.005; to: 0.01 0.01 0.01; dur: 150;"
      fuse={false}
      fuseTimeout={3000}
      color="#c7c7c7"
      opacity="0.5"
      geometry="primitive: circle"
      scale="0.01 0.01 0.01"
      //onClick={() => coJe('co je')}
      {...props}
    />
  );
};

export default Cursor;
