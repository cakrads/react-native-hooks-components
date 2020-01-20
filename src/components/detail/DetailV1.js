import React, {useEffect} from 'react';
import {
  Animated,
  Dimensions,
  Platform,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {withNavigation} from 'react-navigation';

import {GLOBALSTYLES, COLORS} from './../../theme';
import {View, Text, RatingStarV1, H1, H2} from './../index';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const IMAGE_HEIGHT = SCREEN_HEIGHT * (45 / 100);
const HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 50;
const SCROLL_HEIGHT = IMAGE_HEIGHT - HEADER_HEIGHT;
const TITLE_HEIGHT = 130;

const DetailV1 = props => {
  const nScroll = new Animated.Value(0);
  const scroll = new Animated.Value(0);

  useEffect(() => {
    nScroll.addListener(
      Animated.event([{value: scroll}], {useNativeDriver: false}),
    );
  });

  const HeaderImage = ({data}) => {
    const BackButton = () => {
      return (
        <TouchableOpacity
          style={styles.hIBackButton}
          onPress={() => props.navigation.goBack(null)}>
          <Icon
            name={Platform.OS == 'ios' ? 'chevron-left' : 'arrow-left'}
            size={GLOBALSTYLES.H1.fontSize}
            color={COLORS.text}
          />
        </TouchableOpacity>
      );
    };

    return (
      <ImageBackground
        resizeMode="cover"
        style={{
          ...styles.headerImage,
        }}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
        }}>
        <View style={styles.hIMain}>
          <BackButton />
        </View>
      </ImageBackground>
    );
  };

  const {main, crewAndCast, videos} = props.data;

  return (
    <View>
      <HeaderImage data={main} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    backgroundColor: '#fff',
  },
  hTMain: {
    backgroundColor: '#FFFFFF4C',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  hTBackButton: {
    minWidth: 44,
    marginRight: 10,
    alignItems: 'center',
  },
  hTH1: {flex: 1, flexGrow: 2},
  headerImage: {
    backgroundColor: COLORS.gray,
    paddingHorizontal: 20,
    height: IMAGE_HEIGHT,
    paddingTop: IMAGE_HEIGHT / 6,
  },
  hIBackButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.cardBackground,
    borderRadius: 100,
    ...GLOBALSTYLES.shadowMedium,
  },
  hIMain: {flexDirection: 'row', justifyContent: 'space-between'},
  hIShare: {
    width: 44,
    height: 44,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  hICard: {
    borderRadius: GLOBALSTYLES.borderRadius,
    backgroundColor: COLORS.cardBackground,
    padding: 10,
    minHeight: TITLE_HEIGHT,
    width: SCREEN_WIDTH * (80 / 100),
    marginTop: -TITLE_HEIGHT / 2,
    marginBottom: 20,
    flexDirection: 'column',
    alignSelf: 'center',
    ...GLOBALSTYLES.shadowMedium,
  },
  hICMain: {flexDirection: 'row'},
  hICTitle: {flex: 1, flexGrow: 2.5},
  hICShare: {
    flex: 1,
    alignItems: 'center',
  },
  hICMainBottom: {
    justifyContent: 'center',
  },
  hICGenre: {color: COLORS.gray, ...GLOBALSTYLES.bold},
  containerDetail: {paddingHorizontal: 20, paddingTop: 0, paddingBottom: 20},
});

export default withNavigation(DetailV1);
