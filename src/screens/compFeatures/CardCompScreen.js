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
  CardV3,
  CardV4,
  HorizontalCardV1,
  HorizontalCardV2,
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
            width={'100%'}
            image={`https://image.tmdb.org/t/p/w500/${cardDatum.backdrop_path}`}
            title={cardDatum.title}
            desc={cardDatum.overview}
            desc={cardDatum.overview}
            rate={cardDatum.vote_average}
            voteCount={cardDatum.vote_count}
          />
        </View>
        <View mb>
          <H3>Card V2</H3>
          <CardV2
            clickAction={() => clickAction(cardDatum.id)}
            width={170}
            image={`https://image.tmdb.org/t/p/w500/${cardDatum.poster_path}`}
            title={cardDatum.title}
            addText={dateFormater('simple', new Date(cardDatum.release_date))}
            rate={cardDatum.vote_average == 0 ? '-' : cardDatum.vote_average}
          />
        </View>
        <View mb>
          <H3>Card V3 Colom</H3>
          <CardV3
            clickAction={() => clickAction(cardDatum.id)}
            image={`https://image.tmdb.org/t/p/w500/${cardDatum.backdrop_path}`}
            title={cardDatum.title}
            addText={dateFormater('simple', new Date(cardDatum.release_date))}
            rate={cardDatum.vote_average == 0 ? '-' : cardDatum.vote_average}
            bottomText={'Adventure'}
          />
          <View mb>
            <H3>Card V3</H3>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <CardV3
                style={{width: 180, marginRight: 20}}
                clickAction={() => clickAction(cardDatum.id)}
                image={`https://image.tmdb.org/t/p/w500/${cardDatum.poster_path}`}
                title={cardDatum.title}
                addText={dateFormater(
                  'simple',
                  new Date(cardDatum.release_date),
                )}
                rate={
                  cardDatum.vote_average == 0 ? '-' : cardDatum.vote_average
                }
                bottomText={'Adventure'}
              />
              <CardV3
                style={{width: 180}}
                clickAction={() => clickAction(cardDatum.id)}
                image={`https://image.tmdb.org/t/p/w500/${cardDatum.poster_path}`}
                title={cardDatum.title}
                addText={dateFormater(
                  'simple',
                  new Date(cardDatum.release_date),
                )}
                rate={
                  cardDatum.vote_average == 0 ? '-' : cardDatum.vote_average
                }
                bottomText={'Adventure'}
              />
            </View>
          </View>
        </View>
        <View mb>
          <H3>Card V4</H3>
          <CardV4
            clickAction={() => clickAction(cardDatum.id)}
            image={`https://image.tmdb.org/t/p/w500/${cardDatum.backdrop_path}`}
            title={cardDatum.title}
            addText={'Action • Adventure • Mystery'}
          />
          <Text>Example Width: 90%</Text>
          <CardV4
            cardWidth={'90%'}
            clickAction={() => clickAction(cardDatum.id)}
            image={`https://image.tmdb.org/t/p/w500/${cardDatum.backdrop_path}`}
            title={cardDatum.title}
            addText={'Action • Adventure • Mystery'}
          />
          
        </View>
        <View mb>
          <H3>Horizontal Card V1</H3>
          <HorizontalCardV1 data={cardData} clickAction={clickAction} />
        </View>
        <View mb>
          <H3>Horizontal Card V2</H3>
          <HorizontalCardV2 data={cardData} clickAction={clickAction} />
        </View>
      </Content>
    </Container>
  );
};

export default withNavigation(BadgeCompScreen);
