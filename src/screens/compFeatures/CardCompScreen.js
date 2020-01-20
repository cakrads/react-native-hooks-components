import React from 'react';
import {withNavigation} from 'react-navigation';
import {dateFormater} from './../../helpers/date';
import cardData from './../../../src/api/DummyData';

import {
  Container,
  Content,
  View,
  CardV1,
  CardV2,
  Header,
  H3,
  Text,
} from './../../components';

const BadgeCompScreen = props => {
  const cardDatum = cardData[0];

  const clickAction = param => {
    console.log(param);
  };

  return (
    <Container>
      <Content padder>
        <Header backButton>Card Component</Header>
        <View mb>
          <H3>Card V1</H3>
          <CardV1
            clickAction={() => clickAction(cardDatum.id)}
            width={170}
            image={`https://image.tmdb.org/t/p/w500/${cardDatum.poster_path}`}
            title={cardDatum.title}
            addText={dateFormater('simple', new Date(cardDatum.release_date))}
            rate={cardDatum.vote_average == 0 ? '-' : cardDatum.vote_average}
          />
        </View>
        <View mb>
          <H3>Card V2</H3>
          <CardV2
            clickAction={() => clickAction(cardDatum.id)}
            image={`https://image.tmdb.org/t/p/w500/${cardDatum.backdrop_path}`}
            title={cardDatum.title}
            addText={'Action • Adventure • Mystery'}
          />
          <Text>Example Width: 90%</Text>
          <CardV2
            cardWidth={'90%'}
            clickAction={() => clickAction(cardDatum.id)}
            image={`https://image.tmdb.org/t/p/w500/${cardDatum.backdrop_path}`}
            title={cardDatum.title}
            addText={'Action • Adventure • Mystery'}
          />
          
        </View>
      </Content>
    </Container>
  );
};

export default withNavigation(BadgeCompScreen);
