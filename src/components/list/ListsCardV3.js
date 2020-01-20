import React from 'react';
import {useDispatch} from 'react-redux';
import {FlatList, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import {CardV3} from './../index';
import {dateFormater} from './../../helpers/date';
import {genreByID} from '../../store/actions/movie';

import {GLOBALSTYLES} from '../../theme';

const MARGINRIGHT = GLOBALSTYLES.container.paddingHorizontal;
const deviceWidth = Dimensions.get('window').width;
const cardWidth = deviceWidth / 2 - MARGINRIGHT - MARGINRIGHT / 2;

const ListsCardV3 = props => {
  const dispatch = useDispatch();

  const getGenre = genreID => {
    return dispatch(genreByID(genreID));
  };

  const ItemList = ({data, index}) => {
    return (
      <CardV3
        style={{
          // marginBottom: index == props.data.length - 1 ? 35 : 20,
          marginBottom: 20,
          width: cardWidth,
          marginRight: MARGINRIGHT,
        }}
        clickAction={() => props.clickAction(data.id)}
        image={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        title={data.title}
        addText={dateFormater('simple', new Date(data.release_date))}
        rate={data.vote_average == 0 ? '-' : data.vote_average}
        bottomText={data.genre_ids ? getGenre(data.genre_ids[0]) : null}
      />
    );
  };

  return (
    <FlatList
      {...props}
      style={{...GLOBALSTYLES.container, ...props.style}}
      numColumns={'2'}
      data={props.data}
      renderItem={({item, index}) => <ItemList data={item} index={index} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

ListsCardV3.propTypes = {
  data: PropTypes.array,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
};

export default ListsCardV3;
