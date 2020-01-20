import React from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {CardV2} from './../index';
import {GLOBALSTYLES} from '../../theme';

const ListsCardV2 = props => {
  const getGenre = genreID => {
    return ' - ';
  };

  const ItemList = ({data, index}) => {
    let genres = data.genre_ids
      .map(x => {
        return getGenre(x);
      })
      .join(' • ');

    return (
      <CardV2
        {...props}
        style={{marginBottom: index == props.data.length - 1 ? 35 : 20}}
        clickAction={() => props.clickAction(data.id)}
        image={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
        title={data.title}
        addText={genres}
      />
    );
  };

  return (
    <FlatList
      style={{...GLOBALSTYLES.container, ...props.style}}
      data={props.data}
      renderItem={({item, index}) => <ItemList data={item} index={index} />}
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
