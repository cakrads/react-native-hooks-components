import React from 'react';
import {Dimensions} from 'react-native';
import {withNavigation} from 'react-navigation';
import {GLOBALSTYLES} from './../../theme';
import {
  SimpleCarousel,
  Header,
  Container,
  H3,
  Content,
} from './../../components';

const deviceWidth = Dimensions.get('window').width;

const CarouselCompScreen = props => {
  const cardData = [
    `https://image.tmdb.org/t/p/w500/dCB7d4l0mfpsISZvr6aPE2z5QF6.jpg`,
    `https://image.tmdb.org/t/p/w500/5BwqwxMEjeFtdknRV792Svo0K1v.jpg`,
    `https://image.tmdb.org/t/p/w500/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg`,
    `https://image.tmdb.org/t/p/w500/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg`,
    `https://image.tmdb.org/t/p/w500/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg`,
  ];

  return (
    <Container>
      <Content padder>
        <Header backButton>Carousel Component</Header>
        <H3>Simple Carousel</H3>
        <SimpleCarousel images={cardData} />
      </Content>
    </Container>
  );
};

export default withNavigation(CarouselCompScreen);
