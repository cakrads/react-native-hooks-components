import React from 'react';
import {GLOBALSTYLES, COLORS} from '../../theme';
import {Text} from './../index';

const H1 = props => {
  return (
    <Text
      {...props}
      style={{
        ...GLOBALSTYLES.H1,
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

H1.defaultProps = {
  style: {},
  children: null,
  primary: false,
  secondary: false,
};

export default H1;
