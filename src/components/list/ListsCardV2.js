import React from 'react';
import {FlatList, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import {CardV2} from './../index';
import {dateFormater} from './../../helpers/date';
import {GLOBALSTYLES} from '../../theme';

const MARGINRIGHT = GLOBALSTYLES.container.paddingHorizontal;
const deviceWidth = Dimensions.get('window').width;
const cardWidth = deviceWidth / 2 - MARGINRIGHT - MARGINRIGHT / 2;

const ListsCardV2 = props => {
  const Card = ({data}) => {
    return (
      <CardV2
        style={{marginBottom: 33, width: cardWidth, marginRight: MARGINRIGHT}}
        clickAction={() => props.clickAction(data.id)}
        image={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        title={data.title}
        addText={dateFormater('simple', new Date(data.release_date))}
        rate={data.vote_average == 0 ? '-' : data.vote_average}
      />
    );
  };

  return (
    <FlatList
      {...props}
      style={{...GLOBALSTYLES.container, ...props.style}}
      numColumns={'2'}
      data={props.data}
      renderItem={({item}) => <Card data={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

ListsCardV2.propTypes = {
  data: PropTypes.array,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
};

export default ListsCardV2;
