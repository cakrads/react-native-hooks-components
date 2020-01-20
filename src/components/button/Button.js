import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from './../index';
import PropTypes from 'prop-types';
import {COLORS, GLOBALSTYLES} from '../../theme';

const Button = props => {
  const coloring = () => {
    if (props.primary) {
      return COLORS.primary;
    } else if (props.secondary) {
      return COLORS.secondary;
    } else if (props.danger) {
      return COLORS.danger;
    } else if (props.info) {
      return COLORS.info;
    } else if (props.warning) {
      return COLORS.warning;
    } else if (props.success) {
      return COLORS.success;
    } else {
      return COLORS.cardBackground;
    }
  };
  
  const getInitialStyle = () => {
    const buttonStyle = () => {
      if (!props.bordered) {
        return {
          backgroundColor: coloring(),
          borderColor: COLORS.gray,
        };
      } else {
        return {borderColor: coloring()};
      }
    };

    return {
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: GLOBALSTYLES.borderRadius,
      borderWidth: 1,
      alignSelf: 'flex-start',
      minWidth: 100,
      alignItems: 'center',
      ...buttonStyle(),
      ...props.style,
    };
  };

  if (props.link) {
    return (
      <TouchableOpacity {...props} style={{...props.style}}>
        <Text>{props.children}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity {...props} style={getInitialStyle()}>
        <Text
          style={{
            color: props.bordered
              ? coloring()
              : getInitialStyle().backgroundColor == COLORS.cardBackground
              ? COLORS.text
              : COLORS.textOnPrimary,
          }}>
          {props.children}
        </Text>
      </TouchableOpacity>
    );
  }
};

Button.propsType = {
  ...TouchableOpacity.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
  link: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  bordered: PropTypes.bool,
};

export default Button;
