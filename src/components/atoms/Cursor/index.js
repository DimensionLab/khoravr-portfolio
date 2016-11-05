import React from 'react';

const Cursor = (props) => {
  return (
    <a-cursor
      animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150;"
      color="#73E9FE"
      {...props}
    />
  );
};

export default Cursor;
