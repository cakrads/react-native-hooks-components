import React from 'react';
import {FlatList, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

import CardV1 from './CardV1';

const deviceWidth = Dimensions.get('window').width;
const cardWidth = deviceWidth - deviceWidth * (30 / 100);

const HorizontalCardV1 = props => {
  const Card = ({data}) => {
    return (
      <CardV1
        style={{width: cardWidth, marginRight: 20}}
        clickAction={() => props.clickAction(data.id)}
        image={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
        title={data.title}
        desc={data.overview}
        rate={data.vote_average}
        voteCount={data.vote_count}
      />
    );
  };

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={props.data}
      renderItem={({item}) => <Card data={item} />}
      keyExtractor={(item, index) => index.toString()}
      style={{marginBottom: 20}}
    />
  );
};

HorizontalCardV1.propTypes = {
  data: PropTypes.array,
};

export default HorizontalCardV1;
