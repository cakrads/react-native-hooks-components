import React from 'react';
import {View, Platform, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import {withNavigation} from 'react-navigation';
import {COLORS} from './../../theme';

const deviceHeight = Dimensions.get('window').height;

const Container = props => {
  return (
    <View
      {...props}
      style={{
        flex: 1,
        height: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20,
        backgroundColor: COLORS.background,
      }}>
      {props.children}
    </View>
  );
};

Container.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
};

export default withNavigation(Container);
