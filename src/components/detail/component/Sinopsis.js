import React from 'react';

import {GLOBALSTYLES, COLORS} from './../../../theme';
import {View, Text, H3} from './../../index';

const Sinopsis = ({data}) => {
  return (
    <View style={{marginBottom: 20}}>
      <H3 style={{color: COLORS.gray}}>Sinopsis</H3>
      <Text style={{fontSize: GLOBALSTYLES.fontSize}}>{data.overview}</Text>
    </View>
  );
};

export default Sinopsis;
