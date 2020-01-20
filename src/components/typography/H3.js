import React from 'react';
import {GLOBALSTYLES, COLORS} from '../../theme';
import {Text} from './../index';

const H3 = props => {
  return (
    <Text
      {...props}
      style={{
        ...GLOBALSTYLES.H3,
        color: props.primary
          ? COLORS.primary
          : props.secondary
          ? COLORS.secondary
          : COLORS.text,
        ...props.style,
      }}>
      {props.children}
    </Text>
  );
};

H3.defaultProps = {
  style: {},
  children: null,
  primary: false,
  secondary: false,
};

export default H3;
