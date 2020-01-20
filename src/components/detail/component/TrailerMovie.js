import React from 'react';
import {FlatList, Dimensions, StyleSheet, Linking} from 'react-native';
import {COLORS} from '../../../theme';
import {View, H3, Text, CardV4, LoadingActivity} from '../../index';
import Icon from 'react-native-vector-icons/FontAwesome';

const TrailerMovie = ({data}) => {
  const cardWidth = Dimensions.get('window').width * 0.8;

  const Card = ({dataItem}) => {
    return (
      <CardV4
        cardWidth={cardWidth}
        style={{marginRight: 10}}
        clickAction={() =>
          Linking.openURL(`https://www.youtube.com/watch?v=${dataItem.key}`)
        }
        image={`https://img.youtube.com/vi/${dataItem.key}/0.jpg`}
        title={<Icon name={'play-circle-o'} size={40} color={COLORS.white} />}
      />
    );
  };

  return (
    <View style={styles.container}>
      <H3 style={styles.title}>Trailers & Videos</H3>
      {data == null ? (
        <LoadingActivity />
      ) : data.length == 0 ? (
        <Text>Sorry, We don't have Trailers</Text>
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={({item}) => <Card dataItem={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginVertical: 20},
  title: {color: COLORS.gray},
});

export default TrailerMovie;
