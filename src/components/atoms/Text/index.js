import AFRAME from 'aframe';
import { Entity } from 'aframe-react';
import React, { PropTypes } from 'react';

const Text = (props) => {
  const extraProps = AFRAME.utils.extend({}, props);
  delete extraProps.color;
  delete extraProps.text;

  return (
    <Entity
      text={{ text: props.text }}
      material={{ color: props.color }}
      {...extraProps}
    />
  );
};

Text.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default Text;
