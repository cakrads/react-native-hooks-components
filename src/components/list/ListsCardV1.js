import React from 'react';
import {FlatList, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import {CardV1, View} from './../index';
import {GLOBALSTYLES} from '../../theme';

const MARGINRIGHT = GLOBALSTYLES.container.paddingHorizontal;
const deviceWidth = Dimensions.get('window').width;
const cardWidth = deviceWidth / 2 - MARGINRIGHT - MARGINRIGHT / 2;

const ListsCardV1 = props => {
  const Card = ({data, index}) => {
    return (
      <CardV1
        style={{
          marginBottom: index == props.data.length - 1 ? 35 : 20,
          width: cardWidth,
          marginRight: MARGINRIGHT,
        }}
        clickAction={() => props.clickAction(data.id)}
        image={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
        title={data.title}
        desc={data.overview}
        rate={data.vote_average}
      />
    );
  };
  return (
    <FlatList
      {...props}
      style={{...GLOBALSTYLES.container, ...props.style}}
      numColumns={'2'}
      data={props.data}
      renderItem={({item, index}) => <Card data={item} index={index} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

ListsCardV1.propTypes = {
  data: PropTypes.array,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
};

export default ListsCardV1;
