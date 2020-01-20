import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {GLOBALSTYLES} from './../../theme';
import {dateFormater} from './../../helpers/date';
import CardV2 from './CardV2';

const HorizontalCardV2 = props => {
  const Card = ({data}) => {
    return (
      <CardV2
        style={{marginRight: 15}}
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
      showsHorizontalScrollIndicator={false}
      horizontal
      data={props.data}
      renderItem={({item}) => <Card data={item} />}
      keyExtractor={(item, index) => index.toString()}
      style={{marginBottom: 20}}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    width: 170,
  },
  titleCard: {...GLOBALSTYLES.H4},
  cardImage: {
    height: 255,
    borderRadius: GLOBALSTYLES.borderRadius,
    marginRight: 10,
    marginBottom: 5,
  },
  bottomCard: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '92%',
  },
});

export default HorizontalCardV2;
