import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {GLOBALSTYLES, COLORS} from '../../theme';
import {View, Text, RatingOneLine, H3} from './../index';

import PropTypes from 'prop-types';

const CardV1 = props => {
  return (
    <View
      style={{
        ...styles.card,
        ...props.style,
      }}>
      <TouchableOpacity onPress={props.clickAction}>
        <Image
          source={{
            uri: props.image,
          }}
          style={{...styles.cardImage, backgroundColor: props.bgColor}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.clickAction}>
        <H3 numberOfLines={1}>{props.title}</H3>
      </TouchableOpacity>
      <Text style={styles.desc} numberOfLines={2}>
        {props.desc}
      </Text>
      <RatingOneLine
        maxRate={10}
        rate={{value: props.rate, maxValue: 10}}
        voteCount={props.voteCount}
        fontSize={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    width: '100%',
  },
  desc: {
    marginBottom: 5,
  },
  cardImage: {
    height: 150,
    borderRadius: GLOBALSTYLES.borderRadius,
    marginBottom: 5,
  },
});

CardV1.defaultProps = {
  style: {width: '100%'},
  image: '',
  title: '-',
  bgColor: COLORS.gray,
};

CardV1.propTypes = {
  clickAction: PropTypes.func,
  image: PropTypes.string,
  title: PropTypes.string,
  bgColor: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
};

export default CardV1;
