import React, {useEffect} from 'react';
import {
  Animated,
  Dimensions,
  Platform,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {withNavigation} from 'react-navigation';

import {GLOBALSTYLES, COLORS} from './../../theme';
import {View, Text, H1, H2, RatingOneLine} from './../index';

import AddInfo from './component/AddInfo';
import Sinopsis from './component/Sinopsis';
import Tagline from './component/Tagline';
import CrewAndCast from './component/CrewAndCast';
import TrailerMovie from './component/TrailerMovie';
import ProductionCompanies from './component/ProductionCompanies';
import {dateFormater} from '../../helpers/date';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const IMAGE_HEIGHT = SCREEN_HEIGHT * (40 / 100);
const HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 50;
const SCROLL_HEIGHT = IMAGE_HEIGHT - HEADER_HEIGHT;
const TITLE_HEIGHT = 130;
const TITLE_IMAGE_HEIGHT = 200;

const DetailV1 = props => {
  const nScroll = new Animated.Value(0);
  const scroll = new Animated.Value(0);

  useEffect(() => {
    nScroll.addListener(
      Animated.event([{value: scroll}], {useNativeDriver: false}),
    );
  });

  const HeaderTitle = ({data}) => {
    const headerDisplay = scroll.interpolate({
      inputRange: [0, SCROLL_HEIGHT / 2, SCROLL_HEIGHT],
      outputRange: [0, 0.3, 1],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View style={{...styles.headerTitle, opacity: headerDisplay}}>
        <ImageBackground
          resizeMode="cover"
          style={{width: '100%'}}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`,
          }}>
          <View style={styles.hTMain}>
            <TouchableOpacity
              style={styles.hTBackButton}
              onPress={() => props.navigation.goBack()}>
              <Icon
                name={Platform.OS == 'ios' ? 'chevron-left' : 'arrow-left'}
                size={GLOBALSTYLES.H1.fontSize}
                color={COLORS.text}
              />
            </TouchableOpacity>
            <View style={styles.hTH1}>
              <H1>{data.title}</H1>
            </View>
            {/* Cooming Soon
            <TouchableOpacity
              style={{
                minWidth: 44,
                marginLeft: 10,
                alignItems: 'center',
              }}>
              <Icon
                name="share"
                size={GLOBALSTYLES.H1.fontSize}
                color={COLORS.text}
              />
            </TouchableOpacity> */}
          </View>
        </ImageBackground>
      </Animated.View>
    );
  };

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
        style={{}}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`,
        }}>
        <View
          style={{
            ...styles.headerImage,
          }}>
          <View style={styles.hIMain}>
            <BackButton />
            {/* <TouchableOpacity
            style={styles.hIShare}>
            <Icon name="share" size={GLOBALSTYLES.H1.fontSize} />
          </TouchableOpacity> */}
          </View>
        </View>
        {/* <TitleCard data={data} /> */}
        {/* <TitleCard2 data={data} /> */}
      </ImageBackground>
    );
  };

  const TitleCard2 = ({data}) => {
    return (
      <View
        style={{
          minHeight: 200,
          borderRadius: GLOBALSTYLES.borderRadius,
          marginTop: -TITLE_IMAGE_HEIGHT / 3,
          width: SCREEN_WIDTH - 2 * GLOBALSTYLES.container.paddingHorizontal,
          marginBottom: 30,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: (TITLE_IMAGE_HEIGHT * 9) / 16,
              height: TITLE_IMAGE_HEIGHT,
              marginRight: 15,
              borderRadius: GLOBALSTYLES.borderRadius,
              shadowColor: 'red',
              shadowOpacity: 0,
              shadowRadius: 5,
              elevation: 25,
            }}>
            <Image
              style={{
                width: (TITLE_IMAGE_HEIGHT * 9) / 16,
                height: TITLE_IMAGE_HEIGHT,
                borderRadius: GLOBALSTYLES.borderRadius,
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingTop: TITLE_IMAGE_HEIGHT / 3 + 5,
            }}>
            <H2 numberOfLines={2}>{data.title}</H2>
            <Text style={{marginBottom: 5}}>
              {data.genres
                .map(x => {
                  return `${x.name}`;
                })
                .join(', ')}{' '}
            </Text>
            <RatingOneLine
              style={{marginBottom: 5}}
              maxRate={10}
              rate={{value: data.vote_average, maxValue: 10}}
              fontSize={16}
              iconColor={COLORS.primary}
            />
            <Text style={{marginBottom: 5}}>
              <Icon name="calendar" color={COLORS.primary} />{' '}
              {dateFormater('simple', new Date(data.release_date))}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const {main, crewAndCast, videos} = props.data;

  return (
    <View>
      <HeaderTitle data={main} />
      <Animated.ScrollView
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: nScroll}}}],
          {useNativeDriver: true},
        )}
        style={{zIndex: 0}}>
        <HeaderImage data={main} />
        <View style={styles.containerDetail}>
          <TitleCard2 data={main} />
          <Sinopsis data={main} />
          <Tagline data={main} />
          <TrailerMovie data={videos} />
          <ProductionCompanies data={main} />
          <CrewAndCast data={crewAndCast} />
          <AddInfo data={main} />
        </View>
      </Animated.ScrollView>
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
    paddingTop: IMAGE_HEIGHT * 0.1,
    opacity: 0.7,
  },
  hIBackButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.cardBackground,
    opacity: 0.7,
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
  hICMain: {flexDirection: 'row'},
  hICTitle: {flex: 1, flexGrow: 2.5, paddingTop: 0},
  hICRate: {
    flex: 1,
    alignItems: 'center',
  },
  hICMainBottom: {
    justifyContent: 'center',
  },
  hICGenre: {color: COLORS.gray, ...GLOBALSTYLES.bold},
  containerDetail: {
    marginTop: -30,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: COLORS.background,
    zIndex: 0,
  },
});

export default withNavigation(DetailV1);
