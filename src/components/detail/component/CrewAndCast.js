import React from 'react';
import {Image, FlatList, StyleSheet} from 'react-native';
import {GLOBALSTYLES, COLORS} from '../../../theme';
import {View, H3, H4, Text} from './../../index';

const CrewAndCast = ({data}) => {
  const CrewAndCastList = ({dataList}) => {
    const Card = ({dataCard}) => {
      return (
        <View style={styles.card}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${dataCard.profile_path}`,
            }}
            style={styles.cardImage}
          />
          <H4 style={styles.cardTitle} numberOfLines={1}>
            {dataCard.character ? dataCard.character : dataCard.job}
          </H4>
          <Text style={styles.cardTitleAdd} numberOfLines={1}>
            {dataCard.name}
          </Text>
        </View>
      );
    };

    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={dataList}
        renderItem={({item}) => <Card dataCard={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  if (!data) return null;

  let producer = data.crew.filter(x => x.job == 'Producer');
  let newData = [...data.cast.slice(0, 6), ...producer];

  return (
    <View style={styles.container}>
      <H3 style={styles.title}>Cast & Crew</H3>
      {newData == null ? (
        <LoadingActivity />
      ) : (
        <CrewAndCastList dataList={newData} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginVertical: 20},
  title: {color: COLORS.gray},
  card: {
    overflow: 'hidden',
    width: 150,
    marginRight: 10,
  },
  cardImage: {
    height: 150,
    borderRadius: GLOBALSTYLES.borderRadius,
    marginBottom: 5,
  },
  cardTitle: {alignSelf: 'center'},
  cardTitleAdd: {alignSelf: 'center'},
});

export default CrewAndCast;
