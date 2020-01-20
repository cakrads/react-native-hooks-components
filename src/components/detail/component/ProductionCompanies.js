import React from 'react';
import {Image, FlatList, StyleSheet} from 'react-native';
import {GLOBALSTYLES, COLORS} from './../../../theme';
import {View, H3, H4, Text} from './../../index';

const ProductionCompanies = ({data}) => {
  const ProductionCompaniesList = ({dataList}) => {
    const Card = ({dataItem}) => {
      return (
        <View style={styles.card}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${dataItem.logo_path}`,
            }}
            style={styles.cardImage}
          />
          <H4 style={styles.cardTitle}>{dataItem.name}</H4>
        </View>
      );
    };

    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={dataList.production_companies}
        renderItem={({item}) => <Card dataItem={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  return (
    <View style={styles.container}>
      <H3 style={styles.title}>Production Companies</H3>
      <ProductionCompaniesList dataList={data} />
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
    height: 50,
    width: 150,
    borderRadius: GLOBALSTYLES.borderRadius,
    marginBottom: 5,
  },
  cardTitle: {alignSelf: 'center'},
});

export default ProductionCompanies;
