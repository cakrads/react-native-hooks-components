import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import {Text, View} from './../index';
import {GLOBALSTYLES, COLORS} from '../../theme';

const CardV4 = props => {
  const {width} = Dimensions.get('window');
  // cardWidth: [use for style, use for calculation:INT]
  const cardWidth = props.cardWidth
    ? typeof props.cardWidth == 'number' || typeof props.cardWidth == 'float'
      ? [props.cardWidth, props.cardWidth]
      : [
          props.cardWidth,
          (width *
            Number(props.cardWidth.substring(0, props.cardWidth.length - 1))) /
            100,
        ]
    : ['100%', width];
  const cardHeight = props.cardHeight
    ? props.cardHeight
    : cardWidth[1] * (9 / 16);

  return (
    <View
      style={{
        ...styles.card,
        width: cardWidth[0],
        ...props.style,
      }}>
      <TouchableOpacity
        onPress={() => {
          props.clickAction(props.id);
        }}>
        <ImageBackground
          resizeMode="cover"
          style={{...styles.cardImage, height: cardHeight}}
          source={{
            uri: props.image,
          }}>
          <View style={{...styles.cardOpacity, height: cardHeight}}></View>
          <Text style={styles.titleCard}>{props.title}</Text>
          {props.addText && props.addText != '-' ? (
            <Text style={styles.titleSubCard}>{props.addText}</Text>
          ) : null}
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: GLOBALSTYLES.borderRadius,
    overflow: 'hidden',
  },
  titleCard: {
    ...GLOBALSTYLES.H1,
    color: COLORS.white,
    paddingBottom: 0,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  titleSubCard: {
    ...GLOBALSTYLES.H4,
    color: COLORS.white,
    paddingHorizontal: 0,
    textAlign: 'center',
  },
  cardOpacity: {
    padding: 10,
    width: '100%',
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    opacity: 0.2,
    position: 'absolute',
  },
  cardImage: {
    backgroundColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

CardV4.defaultProps = {
  style: {},
  image: '',
  bgColor: COLORS.gray,
  title: '-',
  addText: null,
};

CardV4.propTypes = {
  clickAction: PropTypes.func,
  image: PropTypes.string,
  bgColor: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  addText: PropTypes.string,
  cardWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cardHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
};

export default CardV4;
