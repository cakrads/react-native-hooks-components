import React from 'react';
import {View as ViewComp} from 'react-native';
import PropTypes from 'prop-types';

const View = props => {
  return (
    <ViewComp
      {...props}
      style={{marginBottom: props.mb ? 20 : 0, ...props.style}}>
      {props.children}
    </ViewComp>
  );
};

View.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
  mb: PropTypes.bool,
};

export default View;
