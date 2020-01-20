import React from 'react';
import {Text as TextRN} from 'react-native';
import {GLOBALSTYLES, COLORS} from '../../theme';
import propsType from 'prop-types';

const Text = props => {
  return (
    <TextRN
      numberOfLines={props.numberOfLines}
      style={{...GLOBALSTYLES.fontNormal, color: COLORS.text, ...props.style}}>
      {props.children}
    </TextRN>
  );
};

Text.defaultProps = {
  style: {},
  children: '-',
};

Text.PropsType = {
  style: propsType.object,
};

export default Text;
