import React from 'react';
import {withNavigation} from 'react-navigation';
import {Header, Container, View, LoadingActivity} from '../../../components';

const LoadingScreenCompScreen = props => {
  return (
    <Container>
      <Header padder backButton>
        Loading Screen
      </Header>
      <View style={{flex: 1}}>
        <LoadingActivity />
      </View>
    </Container>
  );
};

export default withNavigation(LoadingScreenCompScreen);
