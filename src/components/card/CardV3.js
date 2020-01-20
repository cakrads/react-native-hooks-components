import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View, H4} from './../index';
import {GLOBALSTYLES, COLORS} from '../../theme';

const deviceWidth = Dimensions.get('window').width;

const CardV3 = props => {
  return (
    <View style={{...styles.card, ...props.style}}>
      <ImageBackground
        source={{
          uri: props.image,
        }}
        style={styles.cardImage}>
        <View style={styles.bottomCard}>
          <TouchableOpacity
            onPress={() => {
              props.clickAction(props.id);
            }}>
            <H4 primary style={{marginBottom: 5}} numberOfLines={1}>
              {props.title}
            </H4>
          </TouchableOpacity>
          <View style={styles.additionalData}>
            <Text style={styles.additionalDataText}>{props.addText}</Text>
            <Text style={styles.additionalDataText}>
              {props.rate} <Icon name="star" size={16} color="orange" />
            </Text>
          </View>
          {props.bottomText ? (
            <View>
              <Text>{props.bottomText}</Text>
            </View>
          ) : null}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    width: '100%',
    marginBottom: 20,
    overflow: 'hidden',
    height: 270,
    borderRadius: GLOBALSTYLES.borderRadius,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    height: '100%',
  },
  bottomCard: {
    backgroundColor: COLORS.cardBackground,
    height: 90,
    bottom: 0,
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  additionalData: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 3,
  },
  additionalDataText: {
    color: COLORS.gray,
  },
});

CardV3.defaultProps = {
  style: {},
  image: '',
  title: '-',
  bgColor: COLORS.gray,
  addText: '-',
  rate: '-',
  bottomText: null,
};

CardV3.propTypes = {
  clickAction: PropTypes.func,
  image: PropTypes.string,
  title: PropTypes.string,
  bgColor: PropTypes.string,
  addText: PropTypes.string,
  rate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottomText: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
};

export default CardV3;
