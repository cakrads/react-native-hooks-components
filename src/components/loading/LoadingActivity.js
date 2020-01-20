import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import PropTypes from 'prop-types';
import {COLORS} from '../../theme';

const LoadingActivity = props => {
  const color = props.color ? props.color : COLORS.primary;
  const size = props.size ? props.size : 'large';
  const bg = props.bg
    ? size == 'large'
      ? styles.loadingBgL
      : styles.loadingBgS
    : [];
  return (
    <View style={[styles.container, styles.horizontal, bg]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  loadingBgS: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 100,
    padding: 10,
    width: 40,
    flex: 1,
    alignSelf: 'center',
    margin: 5,
    ...shadow,
  },
  loadingBgL: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 100,
    padding: 10,
    width: 60,
    flex: 1,
    alignSelf: 'center',
    margin: 5,
    ...shadow,
  },
});

LoadingActivity.defaultProps = {
  color: COLORS.primary,
  size: 'large',
  bg: false,
};

LoadingActivity.propsType = {
  bg: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default LoadingActivity;
