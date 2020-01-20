import React from 'react';
import {GLOBALSTYLES, COLORS} from '../../theme';
import {Text} from './../index';

const H4 = props => {
  return (
    <Text
      {...props}
      style={{
        ...GLOBALSTYLES.H4,
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

H4.defaultProps = {
  style: {},
  children: null,
  primary: false,
  secondary: false,
};

export default H4;
