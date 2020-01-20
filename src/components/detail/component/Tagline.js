import React from 'react';
import {StyleSheet} from 'react-native';
import {GLOBALSTYLES, COLORS} from './../../../theme';
import {View, Text, H3} from './../../index';

const Tagline = ({data}) => {
  if (data.tagline == '') return null;
  return (
    <View style={styles.container}>
      <H3 style={styles.quote}>" {data.tagline} "</H3>
      <Text style={styles.writeBy}>~{data.title}~</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderLeftColor: COLORS.primary,
    borderLeftWidth: 3,
    paddingHorizontal: 10,
    overflow: 'hidden',
    paddingBottom: 5,
  },
  quote: {
    paddingTop: 5,
    textTransform: 'capitalize',
    ...GLOBALSTYLES.italic,
  },
  writeBy: {textAlign: 'right'},
});

export default Tagline;
