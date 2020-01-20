import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GLOBALSTYLES, COLORS} from './../../theme';
import {View, Text, H3} from './../index';

const CardV1 = props => {
  return (
    <View style={{...styles.card, ...props.style}}>
      <TouchableOpacity onPress={props.clickAction}>
        <Image
          source={{
            uri: props.image,
          }}
          style={styles.cardImage}
        />
      </TouchableOpacity>
      <H3 primary numberOfLines={1} style={{paddingBottom: 0}}>
        {props.title}
      </H3>
      <View style={styles.bottomCard}>
        <Text>{props.addText}</Text>
        <Text>
          {props.rate == 0 ? '-' : props.rate}{' '}
          <Icon name="star" color={COLORS.secondary} size={14}></Icon>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    width: 160,
  },
  cardImage: {
    height: 255,
    borderRadius: GLOBALSTYLES.borderRadius,
  },
  bottomCard: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

CardV1.defaultProps = {
  style: {},
  image: '',
  title: '-',
  bgColor: COLORS.gray,
  addText: '-',
  rate: '-',
};

CardV1.propTypes = {
  clickAction: PropTypes.func,
  image: PropTypes.string,
  title: PropTypes.string,
  bgColor: PropTypes.string,
  addText: PropTypes.string,
  rate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
};

export default CardV1;
