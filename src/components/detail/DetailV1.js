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

import AddInfo from './component/AddInfo';
import Sinopsis from './component/Sinopsis';
import Tagline from './component/Tagline';
import CrewAndCast from './component/CrewAndCast';
import TrailerMovie from './component/TrailerMovie';
import ProductionCompanies from './component/ProductionCompanies';

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
            uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
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
        style={{
          ...styles.headerImage,
        }}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
        }}>
        <View style={styles.hIMain}>
          <BackButton />
          {/* <TouchableOpacity
            style={styles.hIShare}>
            <Icon name="share" size={GLOBALSTYLES.H1.fontSize} />
          </TouchableOpacity> */}
        </View>
      </ImageBackground>
    );
  };

  const TitleCard = ({data}) => {
    return (
      <View style={styles.hICard}>
        <View style={styles.hICMain}>
          <View style={styles.hICTitle}>
            <View>
              <H2
                style={{
                  paddingTop: 0,
                }}>
                {data.title}
              </H2>
            </View>
          </View>
          <View style={styles.hICShare}>
            <RatingStarV1 rate={data.vote_average} userRate={data.vote_count} />
          </View>
        </View>
        <View style={styles.hICMainBottom}>
          <View>
            <Text style={{color: COLORS.gray}}>
              {data.original_title} (
              <Text style={GLOBALSTYLES.italic}>original title</Text>)
            </Text>
            <Text style={styles.hICGenre}>
              {data.genres
                .map(x => {
                  return `${x.name}`;
                })
                .join(', ')}{' '}
              • {data.runtime} min
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
        <TitleCard data={main} />
        <View style={styles.containerDetail}>
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
