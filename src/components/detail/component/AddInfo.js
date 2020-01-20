import React from 'react';
import {StyleSheet} from 'react-native';

import {COLORS} from './../../../theme';
import {dateFormater} from './../../../helpers/date';
import numberFormat from './../../../helpers/number';
import {View, Text, H3, H4} from './../../index';

const AddInfo = ({data}) => {
  return (
    <View style={styles.container}>
      <H3 style={{color: COLORS.gray}}>More Information</H3>

      <View style={styles.addInfoContainer}>
        <View style={styles.addInfoItem}>
          <H4>Status</H4>
          <Text>{data.status}</Text>
        </View>
        <View style={styles.addInfoItem}>
          <H4>Release Date</H4>
          <Text>{dateFormater('simple', new Date(data.release_date))}</Text>
        </View>

        <View style={styles.addInfoItem}>
          <H4>Spoken Languages</H4>
          <Text>
            {data.spoken_languages &&
            data.spoken_languages.length != 0 &&
            data.spoken_languages[0].name
              ? data.spoken_languages[0].name
              : '-'}
          </Text>
        </View>
        <View style={styles.addInfoItem}>
          <H4>Production Countries</H4>
          <Text>
            {data.production_countries && data.production_countries.length > 0
              ? data.production_countries[0].name
              : '-'}
          </Text>
        </View>

        <View style={styles.addInfoItem}>
          <H4>Budget</H4>
          <Text style={styles.addInfoText}>
            {numberFormat(data.budget)} USD
          </Text>
        </View>
        <View style={styles.addInfoItem}>
          <H4>Revenue</H4>
          <Text style={styles.addInfoText}>
            {!data.revenue ? '-' : numberFormat(data.revenue)} USD
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  addInfoContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    display: 'flex',
    flexWrap: 'wrap',
  },
  addInfoItem: {width: '50%', paddingRight: 10, marginBottom: 10},
});

export default AddInfo;
