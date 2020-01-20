import React from 'react';
import {useDispatch} from 'react-redux';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {CardV4} from './../index';
import {genreByID} from '../../store/actions/movie';
import {GLOBALSTYLES} from '../../theme';

const ListsCardV4 = props => {
  const dispatch = useDispatch();

  const getGenre = genreID => {
    return dispatch(genreByID(genreID));
  };

  const ItemList = ({data, index}) => {
    let genres = data.genre_ids
      .map(x => {
        return getGenre(x);
      })
      .join(' • ');

    return (
      <CardV4
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

ListsCardV4.propTypes = {
  data: PropTypes.array,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
};

export default ListsCardV4;
